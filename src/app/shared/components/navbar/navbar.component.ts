import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LucideAngularModule, Heart, Package, Search, Store, CircleUserRound, ShoppingCart, TrendingDown, Bell, Headset, EllipsisVertical } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  loginHover = signal(false);
  moreHover = signal(false);

  readonly Search = Search
  readonly User = CircleUserRound;
  readonly Heart = Heart;
  readonly Package = Package;
  readonly ShoppingCart = ShoppingCart;
  readonly MoreVertical = EllipsisVertical;
  readonly Store = Store;
  readonly Bell = Bell;
  readonly Headset = Headset;
  readonly TrendingUp = TrendingDown;

  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
