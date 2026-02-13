import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-email-page',
  imports: [],
  templateUrl: './register-email-page.component.html',
  styleUrl: './register-email-page.component.scss'
})
export class RegisterEmailPageComponent {

  constructor(private router: Router){}

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
