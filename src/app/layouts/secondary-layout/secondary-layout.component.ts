import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-secondary-layout',
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './secondary-layout.component.html',
  styleUrl: './secondary-layout.component.scss'
})
export class SecondaryLayoutComponent {

}
