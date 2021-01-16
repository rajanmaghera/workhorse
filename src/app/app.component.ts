import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items: NbMenuItem[] = [
    {
      title: 'Dashboard',
      link: '/',
      icon: 'home-outline',
    },
    {
      title: 'Shifts',
      icon: 'clock-outline',
    },
    {
      title: 'Payments',
      icon: 'credit-card-outline',
    },
    {
      title: 'My Account',
      icon: 'person-outline',
    },
   ];

  title = 'workhorse';
}
