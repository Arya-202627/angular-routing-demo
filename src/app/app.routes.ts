import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailsComponent } from './products/product-details.component';
import { authGuard } from './guards/auth.guard';
import { ExercisesComponent } from './exercises/exercises.component';

export const routes: Routes = [
    // 1. Basic Routes
    { path: '', component: HomeComponent, title: 'Home' },
    { path: 'exercises', component: ExercisesComponent, title: 'Student Exercises' },
    { path: 'about', component: AboutComponent, title: 'About' },
    { path: 'contact', component: ContactComponent, title: 'Contact' },

    // 2. Route with Parameters
    { path: 'products/:id', component: ProductDetailsComponent, title: 'Product Details' },

    // 4. Lazy Loading (B) - loadChildren for Feature Module/Routes
    {
        path: 'users',
        loadChildren: () => import('./users/users.routes').then(m => m.USER_ROUTES),
        title: 'Users'
    },

    // 4. Lazy Loading (A) - loadComponent for Single Component
    // 5. Route Guard Applied here
    {
        path: 'admin',
        loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent),
        canActivate: [authGuard],
        title: 'Admin'
    },

    // Wildcard Route (404) - Good practice
    { path: '**', redirectTo: '' }
];
