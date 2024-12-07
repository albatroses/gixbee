import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  otpRequested:boolean = false;

  requestOTP() {
    // Here, call the backend API to send an OTP to the provided mobile number
    console.log('Requesting OTP...');
    this.otpRequested = true;
  }

  onSubmit(form: any) {
    console.log('Login with OTP', form.value);
    // Verify OTP via a backend API call
  }
}
