import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    template: `
    <div class="card contact-card">
      <h1>Contact Us</h1>
      <p>Have questions about Angular Routing?</p>
      
      <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email" placeholder="intern@example.com">
        </div>
        
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" formControlName="message" rows="4" placeholder="Your question..."></textarea>
        </div>
        
        <button type="submit" class="btn btn-primary" [disabled]="!contactForm.valid">
          Send Message
        </button>
      </form>
    </div>
  `,
    styles: [`
    .contact-card { max-width: 600px; margin: 0 auto; }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }
    
    input, textarea {
      width: 100%;
      padding: 0.75rem;
      background: rgba(0,0,0,0.2);
      border: 1px solid var(--border-color);
      border-radius: 0.5rem;
      color: white;
      font-family: inherit;
    }
    
    input:focus, textarea:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
    }
  `]
})
export class ContactComponent {
    contactForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        message: new FormControl('', Validators.required)
    });

    onSubmit() {
        if (this.contactForm.valid) {
            alert('Message sent! (Demo only)');
            this.contactForm.reset();
        }
    }
}
