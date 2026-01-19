import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="card">
      <h1>About This Project</h1>
      <p>
        This application is designed to train interns on <strong>Angular Routing</strong> concepts.
      </p>
      <div class="info-box">
        <h3>📚 Topics Covered</h3>
        <p class="hint">Click on a topic to see it in action!</p>
        <ul>
          <li><a routerLink="/contact" class="topic-link">Basic Navigation & RouterLink</a></li>
          <li><a routerLink="/products/123" [queryParams]="{category: 'demo'}" class="topic-link">Route Parameters</a></li>
          <li><a routerLink="/users" class="topic-link">Nested Routes (Child Routes)</a></li>
          <li><a routerLink="/users" class="topic-link">Lazy Loading Features</a></li>
          <li><a routerLink="/admin" class="topic-link">Route Guards (CanActivate)</a></li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .info-box {
      margin-top: 2rem;
      background: rgba(255,255,255,0.05);
      padding: 1.5rem;
      border-radius: 0.5rem;
    }
    
    .hint {
      font-size: 0.9em;
      color: #888;
      margin-bottom: 1rem;
      font-style: italic;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      margin-bottom: 0.8rem;
    }

    .topic-link {
      display: inline-block;
      color: var(--primary-color, #64B5F6);
      text-decoration: none;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      transition: all 0.2s ease;
      background: rgba(255, 255, 255, 0.05);
      width: 100%;
    }

    .topic-link:hover {
      background: rgba(100, 181, 246, 0.2);
      transform: translateX(5px);
      text-decoration: none;
      color: #90CAF9;
    }
  `]
})
export class AboutComponent { }
