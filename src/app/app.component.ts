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
      link: '/home',
      icon: 'home-outline',
    },
    {
      title: 'Shifts',
      link: '/shifts',
      icon: 'clock-outline',
    },
    {
      title: 'Payments',
      icon: 'credit-card-outline',
      link: '/pay'
    },
    {
      title: 'My Account',
      link: '/account',
      icon: 'person-outline',
    },
   ];

  title = 'workhorse';
}
