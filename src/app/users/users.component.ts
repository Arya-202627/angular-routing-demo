import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-users',
    standalone: true,
    imports: [RouterOutlet, RouterLink, RouterLinkActive], // Step 3: UsersComponent acts as layout with <router-outlet>
    template: `
    <div class="card">
      <div class="users-layout">
        <aside class="sidebar">
          <h3>Users Menu</h3>
          <nav>
            <!-- Relative paths for child routes -->
            <a routerLink="profile" routerLinkActive="active-link">Profile</a>
            <a routerLink="settings" routerLinkActive="active-link">Settings</a>
          </nav>
        </aside>

        <main class="content-area">
          <h3>Nested Content Area</h3>
          <p class="description">
            The component below is rendered by the nested <code>&lt;router-outlet&gt;</code>
          </p>
          
          <div class="outlet-container">
            <router-outlet></router-outlet>
          </div>
        </main>
      </div>
    </div>
  `,
    styles: [`
    .users-layout {
      display: grid;
      grid-template-columns: 200px 1fr;
      gap: 2rem;
      min-height: 300px;
    }
    
    .sidebar {
      border-right: 1px solid var(--border-color);
      padding-right: 1rem;
    }
    
    .sidebar nav {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-top: 1rem;
    }
    
    .sidebar a {
      color: var(--text-muted);
      padding: 0.5rem;
      border-radius: 0.25rem;
      transition: all 0.2s;
    }
    
    .sidebar a:hover {
      background: rgba(255,255,255,0.05);
      color: white;
    }
    
    .content-area {
      padding: 1rem;
    }
    
    .description {
      font-size: 0.9rem;
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--border-color);
    }
  `]
})
export class UsersComponent { }
