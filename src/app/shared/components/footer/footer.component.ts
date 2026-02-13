import { Component } from '@angular/core';
import { CircleQuestionMark, Facebook, Gift, Instagram, LucideAngularModule, Megaphone, Store, Twitter, Youtube } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  readonly Facebook = Facebook;
  readonly Instagram = Instagram;
  readonly Twitter = Twitter;
  readonly Youtube = Youtube;
  readonly Gift = Gift;
  readonly QuestionMark = CircleQuestionMark;
  readonly Store = Store;
  readonly Advertise = Megaphone;
}
