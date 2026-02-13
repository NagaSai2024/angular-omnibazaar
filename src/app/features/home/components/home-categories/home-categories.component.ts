import { Component, signal } from '@angular/core';
import { CategorySectionComponent } from '../category-section/category-section.component';
import { CategoryProduct } from '../../../../core/models/product.model';
import { ApiService } from '../../../../core/services/api.service';

@Component({
  selector: 'app-home-categories',
  imports: [CategorySectionComponent],
  templateUrl: './home-categories.component.html',
  styleUrl: './home-categories.component.scss'
})
export class HomeCategoriesComponent {

  shoes = signal<CategoryProduct[]>([]);
  beauty = signal<CategoryProduct[]>([]);
  electronics = signal<CategoryProduct[]>([]);

  loadingShoes = signal(true);
  loadingBeauty = signal(true);
  loadingElectronics = signal(true);

  constructor(private api: ApiService){
    this.loadData();
  }

  loadData() {
    this.api.getCategoryProducts('Shoes').subscribe(data => {
      this.shoes.set(data);
      this.loadingShoes.set(false);
    });

    this.api.getCategoryProducts('Beauty').subscribe(data => {
      this.beauty.set(data);
      this.loadingBeauty.set(false);
    });

    this.api.getCategoryProducts('Electronics').subscribe(data => {
      this.electronics.set(data);
      this.loadingElectronics.set(false);
    });
  }
}
