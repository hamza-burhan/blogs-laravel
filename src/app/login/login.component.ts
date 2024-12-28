import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  createForm: FormGroup;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    // Initialize the form with FormBuilder
    this.createForm = this.fb.group({
      name: ['', Validators.required], // Name is required for signup
      email: ['', [Validators.required, Validators.email]], // Email with validation
      password: ['', Validators.required] // Password is required
    });

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Only email and password for login
      password: ['', Validators.required] // Password is required
    });
  }

  onSignup() {
    const signupData = this.createForm.value;
    console.log('Signup Data: ', signupData);
    this.createForm.reset();

    // Example API call (uncomment when ready)
    this.apiService.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe({
      next: (data) => {
        console.log('GET Response:', data);
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
  }

  onLogin() {
    const loginData = this.loginForm.value;
    console.log('Login Data: ', loginData);

    // Reset the form after submission
    this.loginForm.reset();
  }
}
