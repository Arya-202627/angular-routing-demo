# Angular Routing Teaching Guide (90-Minute Session)

## Session Objective
By the end of this session, interns should understand how to set up client-side routing in Angular 17+, navigation between views, passing data, performance optimization (lazy loading), and security (guards).

---

## 0. Introduction & Concepts (10 mins)
**Explanation:**
- **SPA (Single Page Application):** Explain that we don't reload the browser for every page. We just swap the components in and out.
- **Client-side vs Server-side Routing:** Traditional (Browser goes to server -> Server sends new HTML) vs Angular (JavaScript intercepts URL change -> Swaps Component).
- **History API:** How we change the URL without reloading.

**Demo:**
- Show the app running. Click links. Point out the browser refresh button *does not* spin.

---

## 1. Setting up Routes (15 mins)
**File:** `src/app/app.routes.ts`
**Concept:** The Route Configuration Array.

**Explanation:**
- "We define a constant array of type `Routes`."
- Each object has a `path` (URL) and a `component` (What to show).
- `path: ''` is the default/home route.
- `title`: Sets the browser tab title (Accessibility/SEO).

**Code to Show:**
```typescript
export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home' },
    { path: 'about', component: AboutComponent, title: 'About' },
    // ...
];
```

**File:** `src/app/app.config.ts`
**Concept:** Providing the Router.
- Show `provideRouter(routes)` in the `providers` array. this makes the routes available to the app.

---

## 2. The Router Outlet & Navigation (15 mins)
**File:** `src/app/app.component.html`
**Concept:** Where do the components go?

**Explanation:**
- `<router-outlet>`: This is a placeholder. Angular replaces this tag with the component matching the current URL.
- **Navigation:**
  - `href="..."`: **BAD** for SPA. It causes a full page reload.
  - `routerLink="..."`: **GOOD**. It tells Angular to handle the navigation internally.

**Concept:** Active Styling
- `routerLinkActive="active-link"`: Angular automatically adds this CSS class when the route matches.
- `[routerLinkActiveOptions]="{exact: true}"`: Needed for the home route (`/`), otherwise it's always "active" (since every path starts with `/`).

**Demo:**
- Inspect Element on the links. Show the class changing as you click.

---

## 3. Dynamic Routes & Parameters (15 mins)
**File:** `src/app/app.routes.ts`
**Concept:** Variable in the URL.

**Code:**
```typescript
{ path: 'products/:id', component: ProductDetailsComponent }
```
- `:id` is a placeholder. It matches `products/1`, `products/abc`, etc.

**File:** `src/app/products/product-details.component.ts`
**Concept:** Getting the data.

**Explanation:**
- **Modern Way (Angular 16+):** Component Input Binding.
- In `app.config.ts`, we added `withComponentInputBinding()`.
- Now, we just use `@Input() id!: string;` in the component. The router automatically injects the parameters as inputs!

**Demo:**
- Click on a product (or manually type `/products/99` in URL).
- Show the ID appearing on screen.

---

## 4. Lazy Loading (Optimization) (15 mins)
**Concept:** Don't download code until you need it.
**Why:** Faster initial load time.

**File:** `src/app/app.routes.ts`

**Type A: Component Lazy Loading (Standalone)**
```typescript
{
    path: 'admin',
    loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent)
}
```
- Explain: "When user visits `/admin`, *then* download `admin.component.js`."

**Type B: Child Routes / Feature Lazy Loading**
```typescript
{
    path: 'users',
    loadChildren: () => import('./users/users.routes').then(m => m.USER_ROUTES)
}
```
- Use this for grouping related routes (e.g., Users list, User details, User settings).
- Show `src/app/users/users.routes.ts` to see the child routes definition.

**Demo:**
- Open Chrome DevTools -> Network Tab.
- Clear Network log.
- Click "Admin". Show the new JS chunk being downloaded dynamically.

---

## 5. Route Guards (Security) (10 mins)
**Concept:** Preventing access.
**Scenario:** Admin page should be private.

**File:** `src/app/guards/auth.guard.ts`
- Explain `CanActivateFn`.
- Returns `true` (allow) or `false` (block) or `UrlTree` (redirect).
- In our demo, we might be mocking it or checking `localStorage`.

**File:** `src/app/app.routes.ts`
```typescript
canActivate: [authGuard]
```
- Show where we attach the guard to the `admin` route.

**Demo:**
- Try to click "Admin". If guard is blocking, show it fails or redirects.
- (Optionally verify logic in `auth.guard.ts` to show how to toggle it).

---

## 6. Handling 404s (Wildcards) (5 mins)
**Concept:** Catch-all route.

**Code:**
```typescript
{ path: '**', redirectTo: '' } // or component: PageNotFoundComponent
```
- **Rule:** MUST be the last route in the array. Angular matches from top to bottom.
- `**` matches anything that hasn't been matched yet.

---

## 7. Recap & Q/A (Remaining Time)
- Summarize: Routes array, `router-outlet`, `routerLink`, Parameters, Lazy Loading, Guards.
