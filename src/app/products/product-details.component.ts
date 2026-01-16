import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-product-details',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <div class="card">
      <div class="header">
        <h1>Product Details</h1>
        <a routerLink="/" class="back-link">← Back to Home</a>
      </div>

      <div class="demo-section">
        <h3>📦 Route Parameter (/:id)</h3>
        <p>This value comes from the URL path:</p>
        <div class="value-display">
          ID: <code>{{ productId }}</code>
        </div>
      </div>

      <div class="demo-section">
        <h3>🔍 Query Parameters (?key=value)</h3>
        <p>These values come from the URL query string:</p>
        <div class="value-display" *ngIf="category">
          Category: <code>{{ category }}</code>
        </div>
        <div class="value-display" *ngIf="!category">
          <em>No category query param provided.</em>
          <br>
          <small>Try adding <a [routerLink]="[]" [queryParams]="{category: 'books'}">?category=books</a> to the URL.</small>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }
    .back-link {
      font-size: 0.9rem;
    }
    .demo-section {
      background: rgba(255, 255, 255, 0.03);
      padding: 1.5rem;
      border-radius: 0.5rem;
      margin-bottom: 1.5rem;
      border-left: 4px solid var(--primary-color);
    }
    .value-display {
      font-size: 1.2rem;
      margin-top: 1rem;
    }
  `]
})
export class ProductDetailsComponent implements OnInit {
    private route = inject(ActivatedRoute);

    productId: string | null = null;
    category: string | null = null;

    ngOnInit() {
        // 1. Get Route Param (Snapshot method - simpler for initial load)
        // For reactive updates (e.g. usually needed in real apps), use this.route.paramMap.subscribe(...)

        // We'll use observables to demonstrate best practice for "same component navigation"
        this.route.paramMap.subscribe(params => {
            this.productId = params.get('id');
        });

        // 2. Get Query Param
        this.route.queryParamMap.subscribe(queryParams => {
            this.category = queryParams.get('category');
        });
    }
}
