import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
    // Step 5: Simple Route Guard
    // In a real app, you would check an AuthService here

    const isAuthenticated = false; // set to false to demonstrate blocking

    console.log('🛡️ AuthGuard invoked for:', state.url);

    if (isAuthenticated) {
        return true;
    } else {
        alert('⛔ Access Denied! (AuthGuard blocked navigation)');
        // Optionally redirect: 
        // inject(Router).navigate(['/']);
        return false;
    }
};

/* 
  Theory:
  - CanActivate: Checks if a route can be activated.
  - CanDeactivate: Checks if a user can leave a route (e.g. unsaved changes).
  - Resolve: Pre-fetches data before route activation.
  - CanMatch: (New) Checks if a Route definition matches and can be loaded.
*/
