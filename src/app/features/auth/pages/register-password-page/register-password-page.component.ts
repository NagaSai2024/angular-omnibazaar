import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-password-page',
  imports: [],
  templateUrl: './register-password-page.component.html',
  styleUrl: './register-password-page.component.scss'
})
export class RegisterPasswordPageComponent {

  constructor(private router: Router){}

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
