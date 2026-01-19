
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-exercises',
    standalone: true,
    imports: [RouterLink],
    template: `
    <div class="page-container">
      <h1>🛠️ Student Exercises</h1>
      <p class="subtitle">Time: 15 Minutes. Hands-on practice to master routing.</p>

      <div class="exercise-list">
        
        <!-- Exercise 1 -->
        <div class="exercise-card">
          <div class="header">
            <span class="badge">Exercise 1</span>
            <h2>Create a "Support" Page</h2>
          </div>
          <div class="content">
            <ol>
              <li><strong>Generate a Component:</strong> Create a new component called <code>SupportComponent</code>.</li>
              <li><strong>Add Route:</strong> Open <code>app.routes.ts</code> and add a path <code>'support'</code> that points to this component.</li>
              <li><strong>Update Navbar:</strong> Open <code>app.component.html</code> and add a link "Support" that navigates to <code>/support</code>.</li>
              <li><strong>Test:</strong> Click the link. Does it load without refreshing the page?</li>
            </ol>
            <div class="hint">🎯 Goal: Understand basic navigation and component creation.</div>
          </div>
        </div>

        <!-- Exercise 2 -->
        <div class="exercise-card">
          <div class="header">
            <span class="badge">Exercise 2</span>
            <h2>Product Categories (Parameters)</h2>
          </div>
          <div class="content">
            <ol>
              <li><strong>Update Route:</strong> Add a new route <code>products/category/:catName</code>.</li>
              <li><strong>Test URL:</strong> Manually type <code>localhost:4200/products/category/electronics</code>.</li>
              <li><strong>Display Data:</strong> Inside the component, try to display the value of <code>catName</code> on the screen.</li>
            </ol>
            <div class="hint">💡 Hint: You can reuse <code>ProductDetailsComponent</code> or create a new <code>CategoryComponent</code>.</div>
          </div>
        </div>

        <!-- Exercise 3 -->
        <div class="exercise-card">
          <div class="header">
            <span class="badge">Exercise 3</span>
            <h2>Secure the "Users" Section</h2>
          </div>
          <div class="content">
            <ol>
              <li><strong>Apply Guard:</strong> We have an <code>auth.guard.ts</code> prepared.</li>
              <li><strong>Protect Route:</strong> Open <code>app.routes.ts</code>. Find the <code>'users'</code> route.</li>
              <li><strong>Add Restriction:</strong> Add <code>canActivate: [authGuard]</code> to the users route configuration.</li>
              <li><strong>Verify:</strong> Try to click "Users" in the navbar. It should be blocked because the guard returns false.</li>
            </ol>
            <div class="hint">🔒 Goal: Learn how to protect routes from unauthorized access.</div>
          </div>
        </div>

        <!-- Exercise 4 -->
        <div class="exercise-card bonus">
          <div class="header">
            <span class="badge bonus-badge">Bonus</span>
            <h2>"Not Found" Page</h2>
          </div>
          <div class="content">
            <ol>
              <li><strong>Create Component:</strong> <code>NotFoundComponent</code>.</li>
              <li><strong>Update Wildcard:</strong> Change the <code>**</code> route to show <code>NotFoundComponent</code> instead of redirecting to Home.</li>
              <li><strong>Test:</strong> Type <code>/random-gibberish</code> in the URL bar. It should show your new 404 page.</li>
            </ol>
          </div>
        </div>

      </div>
    </div>
  `,
    styles: [`
    .page-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }
    
    h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      background: linear-gradient(45deg, #FF6B6B, #FF8E53);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .subtitle {
      color: #888;
      font-size: 1.1rem;
      margin-bottom: 3rem;
    }

    .exercise-list {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .exercise-card {
      background: var(--surface-color, #1e1e1e);
      border-radius: 12px;
      border: 1px solid rgba(255,255,255,0.1);
      overflow: hidden;
      transition: transform 0.2s;
    }

    .exercise-card:hover {
      transform: translateY(-2px);
      border-color: rgba(255,255,255,0.2);
    }

    .header {
      background: rgba(255,255,255,0.05);
      padding: 1.5rem;
      border-bottom: 1px solid rgba(255,255,255,0.05);
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .badge {
      background: #333;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: bold;
      color: #aaa;
    }

    h2 {
      margin: 0;
      font-size: 1.3rem;
    }

    .content {
      padding: 1.5rem;
    }

    ol {
      margin: 0;
      padding-left: 1.5rem;
    }

    li {
      margin-bottom: 1rem;
      line-height: 1.6;
    }

    code {
      background: rgba(255,255,255,0.1);
      padding: 0.2rem 0.4rem;
      border-radius: 4px;
      font-family: monospace;
      color: #FF8E53;
    }

    .hint {
      margin-top: 1.5rem;
      padding: 1rem;
      background: rgba(66, 133, 244, 0.1);
      border-left: 3px solid #4285f4;
      border-radius: 4px;
      font-size: 0.9rem;
    }

    /* Bonus Style */
    .exercise-card.bonus {
      border: 1px solid rgba(255, 215, 0, 0.3);
    }

    .bonus-badge {
      background: rgba(255, 215, 0, 0.2);
      color: #ffd700;
    }
  `]
})
export class ExercisesComponent { }
