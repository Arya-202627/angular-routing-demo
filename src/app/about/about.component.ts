import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    standalone: true,
    template: `
    <div class="card">
      <h1>About This Project</h1>
      <p>
        This application is designed to train interns on <strong>Angular Routing</strong> concepts.
      </p>
      <div class="info-box">
        <h3>📚 Topics Covered</h3>
        <ul>
          <li>Basic Navigation</li>
          <li>Route Parameters</li>
          <li>Nested Routes (Child Routes)</li>
          <li>Lazy Loading</li>
          <li>Route Guards</li>
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
    li {
      list-style-position: inside;
      margin-bottom: 0.5rem;
      color: var(--text-muted);
    }
  `]
})
export class AboutComponent { }
