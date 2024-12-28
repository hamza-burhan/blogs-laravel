import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  createForm: FormGroup;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) {
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
    this.apiService.post('user', signupData).subscribe({
      next: (data) => {
        console.log('Signup Response:', data);
      },
      error: (err) => {
        console.error('Error:', err);
      }
    }) 
    this.createForm.reset();
  }

  onLogin() {
    const loginData = this.loginForm.value;
    console.log('Login Data: ', loginData);
    this.apiService.post('login', loginData).subscribe({
      next: (data) => {
        console.log('Login Response:', data);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Error:', err);
      }
    })
    // Reset the form after submission
    this.loginForm.reset();
  }

  ngOnInit(): void {
    this.apiService.get<any>('user').subscribe({
      next: (data) => {
        console.log('GET Response:', data);
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
  }
}
