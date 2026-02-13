import { Component } from '@angular/core';
import { TopDealsComponent } from '../../components/top-deals/top-deals.component';
import { HomeCategoriesComponent } from '../../components/home-categories/home-categories.component';

@Component({
  selector: 'app-home-page',
  imports: [TopDealsComponent, HomeCategoriesComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
