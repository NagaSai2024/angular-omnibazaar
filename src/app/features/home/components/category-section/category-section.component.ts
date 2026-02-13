import { Component, Input } from '@angular/core';
import { ChevronRight, LucideAngularModule } from 'lucide-angular';
import { CategoryProduct } from '../../../../core/models/product.model';

@Component({
  selector: 'app-category-section',
  imports: [LucideAngularModule],
  templateUrl: './category-section.component.html',
  styleUrl: './category-section.component.scss'
})
export class CategorySectionComponent {

  @Input() heading!: string;
  @Input() items: CategoryProduct[] = [];
  @Input() isLoading: boolean = false;

  readonly ChevronRight = ChevronRight;
}
