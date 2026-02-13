import { Component } from '@angular/core';
import { TopDealsComponent } from '../../components/top-deals/top-deals.component';
import { CategorySectionComponent } from '../../components/category-section/category-section.component';

@Component({
  selector: 'app-home-page',
  imports: [TopDealsComponent, CategorySectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
