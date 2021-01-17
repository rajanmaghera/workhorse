import { Component, SystemJsNgModuleLoader } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private themeService: NbThemeService, private sidebarService: NbSidebarService) { }

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
      title: 'Manage Employees',
      icon: 'people-outline',
      link: '/employees'
    },
    {
      title: 'My Account',
      link: '/account',
      icon: 'person-outline',
    },
   ];

  title = 'workhorse';

   toggleTheme() {
     if (this.themeService.currentTheme == 'default') {
      this.themeService.changeTheme('dark')
     } else {
       this.themeService.changeTheme('default')
     }
   }

   toggleSidebar() {
    this.sidebarService.toggle(true);

  }
   

}
