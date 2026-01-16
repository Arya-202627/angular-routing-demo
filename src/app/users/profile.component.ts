import { Component } from '@angular/core';

@Component({
    selector: 'app-profile',
    standalone: true,
    template: `
    <div class="child-page">
      <h2>👤 User Profile</h2>
      <p>This is the Profile component content.</p>
      <div class="user-info">
        <div class="avatar">JM</div>
        <div>
          <h3>John Mayer</h3>
          <p>Senior Developer</p>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .child-page {
      animation: fadeIn 0.3s ease-in;
    }
    .user-info {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-top: 1rem;
      background: rgba(255,255,255,0.05);
      padding: 1rem;
      border-radius: 0.5rem;
    }
    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: var(--secondary-color);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 1.2rem;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class ProfileComponent { }
