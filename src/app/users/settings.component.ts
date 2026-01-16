import { Component } from '@angular/core';

@Component({
    selector: 'app-settings',
    standalone: true,
    template: `
    <div class="child-page">
      <h2>⚙️ User Settings</h2>
      <p>This is the Settings component content.</p>
      
      <div class="settings-list">
        <div class="setting-item">
          <span>Dark Mode</span>
          <span class="toggle">ON</span>
        </div>
        <div class="setting-item">
          <span>Notifications</span>
          <span class="toggle">OFF</span>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .child-page {
      animation: fadeIn 0.3s ease-in;
    }
    .settings-list {
      margin-top: 1rem;
      max-width: 400px;
    }
    .setting-item {
      display: flex;
      justify-content: space-between;
      padding: 1rem;
      border-bottom: 1px solid var(--border-color);
    }
    .toggle {
      font-weight: bold;
      color: var(--primary-color);
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class SettingsComponent { }
