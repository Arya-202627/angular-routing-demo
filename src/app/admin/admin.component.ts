import { Component } from '@angular/core';

@Component({
    selector: 'app-admin',
    standalone: true,
    template: `
    <div class="card admin-panel">
      <h1>🔐 Admin Dashboard</h1>
      <div class="alert">
        <strong>Success!</strong> You have bypassed the guard (or it allows you).
      </div>
      <p>This component was lazy loaded using <code>loadComponent()</code>.</p>
    </div>
  `,
    styles: [`
    .admin-panel {
      border: 1px solid var(--secondary-color);
    }
    .alert {
      background: rgba(16, 185, 129, 0.2);
      color: var(--success-color);
      padding: 1rem;
      border-radius: 0.5rem;
      margin: 1rem 0;
    }
  `]
})
export class AdminComponent { }
