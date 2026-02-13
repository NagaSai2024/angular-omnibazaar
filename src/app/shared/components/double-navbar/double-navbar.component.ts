import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Bell, Headset, Heart, LucideAngularModule, Package, Search, ShoppingCart, User } from 'lucide-angular';

@Component({
  selector: 'app-double-navbar',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './double-navbar.component.html',
  styleUrl: './double-navbar.component.scss'
})
export class DoubleNavbarComponent {

  loginHover = signal(false);
  moreHover = signal(false);

  readonly Search = Search;
  readonly User = User;
  readonly Package = Package;
  readonly Heart = Heart;
  readonly ShoppingCart = ShoppingCart;
  readonly Bell = Bell;
  readonly Headset = Headset;


  constructor(private router: Router){}

  navigate(path: string){
    this.router.navigate([path]);
  }

}
