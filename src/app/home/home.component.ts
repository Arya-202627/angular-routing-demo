import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="page-container">
      <h1>Welcome to Angular Routing</h1>
      <p class="subtitle">A complete guide for beginners</p>
      
      <!-- Programmatic Navigation Demo -->
      <div class="nav-demo">
        <p>Demonstrating <code>Router.navigate()</code>:</p>
        <button class="btn btn-primary" (click)="goToRandomProduct()">
          🎲 Go to Random Product
        </button>
      </div>

      <div class="features-grid">
        <div class="feature-card" routerLink="/products/123" [queryParams]="{category: 'electronics'}">
          <h3>📦 Route Parameters</h3>
          <p>Learn how to pass data via URL</p>
        </div>
        
        <div class="feature-card" routerLink="/users">
          <h3>👨‍👩‍👧 Child Routes</h3>
          <p>Master nested navigation</p>
        </div>
        
        <div class="feature-card" routerLink="/admin">
          <h3>🛡️ Guards</h3>
          <p>Protect sensitive routes</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      text-align: center;
      padding: 2rem 0;
    }
    
    .subtitle {
      font-size: 1.25rem;
      margin-bottom: 2rem;
    }

    .nav-demo {
      margin-bottom: 3rem;
      padding: 1rem;
      background: rgba(255,255,255,0.05);
      border-radius: 0.5rem;
      display: inline-block;
    }

    .nav-demo p { margin-bottom: 0.5rem; }
    
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }
    
    .feature-card {
      background: var(--surface-color);
      padding: 2rem;
      border-radius: 1rem;
      border: 1px solid var(--border-color);
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .feature-card:hover {
      transform: translateY(-5px);
      border-color: var(--primary-color);
      box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    }
    
    h3 { margin-bottom: 0.5rem; }
  `]
})
export class HomeComponent {
  private router = inject(Router);

  goToRandomProduct() {
    const randomId = Math.floor(Math.random() * 100) + 1;
    this.router.navigate(['/products', randomId], {
      queryParams: { category: 'random' }
    });
  }
}
