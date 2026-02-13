import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { DoubleNavbarComponent } from '../../shared/components/double-navbar/double-navbar.component';

@Component({
  selector: 'app-secondary-layout',
  imports: [RouterOutlet, FooterComponent, DoubleNavbarComponent],
  templateUrl: './secondary-layout.component.html',
  styleUrl: './secondary-layout.component.scss'
})
export class SecondaryLayoutComponent {

}
