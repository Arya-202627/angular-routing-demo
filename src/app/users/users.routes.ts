import { Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { ProfileComponent } from './profile.component';
import { SettingsComponent } from './settings.component';

export const USER_ROUTES: Routes = [
    {
        path: '',
        component: UsersComponent,
        children: [
            { path: 'profile', component: ProfileComponent },
            { path: 'settings', component: SettingsComponent },
            // Default child route (optional, redirects to profile)
            { path: '', redirectTo: 'profile', pathMatch: 'full' }
        ]
    }
];
