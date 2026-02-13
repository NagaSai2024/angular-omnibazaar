import { Component, signal } from '@angular/core';
import { ApiService } from '../../../../core/services/api.service';
import { TopDealProduct } from '../../../../core/models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-deals',
  imports: [CommonModule],
  templateUrl: './top-deals.component.html',
  styleUrl: './top-deals.component.scss'
})
export class TopDealsComponent {

  products = signal<TopDealProduct[]>([]);
  loading = signal(true);

  constructor(private api: ApiService) {
    this.loadData();
  }

  loadData() {
    this.api.getTopDeals().subscribe(data => {
      this.products.set(data);
      this.loading.set(false);
    });
  }

}
