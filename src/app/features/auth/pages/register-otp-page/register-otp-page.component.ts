import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-otp-page',
  imports: [],
  templateUrl: './register-otp-page.component.html',
  styleUrl: './register-otp-page.component.scss'
})
export class RegisterOtpPageComponent {

  constructor(private router: Router){}

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
