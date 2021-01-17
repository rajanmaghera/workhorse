import { NgModule } from '@angular/core';
import { PaymentsPageComponent } from './payments-page/payments-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ShiftsPageComponent } from './shifts-page/shifts-page.component';
import { AccountPageComponent } from './account-page/account-page.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'pay', component: PaymentsPageComponent },
  { path: 'home', component: DashboardPageComponent },
  { path: 'shifts', component: ShiftsPageComponent },
  { path: 'account', component: AccountPageComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
