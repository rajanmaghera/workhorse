import { NgModule } from '@angular/core';
import { PaymentsPageComponent } from './payments-page/payments-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ShiftsPageComponent } from './shifts-page/shifts-page.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { SchedulerPageComponent } from './scheduler-page/scheduler-page.component';

import {
  NbAuthComponent,
  NbLoginComponent,
  NbRegisterComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';



import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'pay', component: PaymentsPageComponent },
  { path: 'home', component: DashboardPageComponent },
  { path: 'shifts', component: ShiftsPageComponent },
  { path: 'account', component: AccountPageComponent },
  { path: 'employees', component: EmployeePageComponent},
  { path: 'scheduler', component: SchedulerPageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},

  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
