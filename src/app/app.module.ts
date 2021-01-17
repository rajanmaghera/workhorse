import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ManagerComponent } from './manager/manager.component';
import { TimetableComponent } from './timetable/timetable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule } from '@nebular/theme';
import { NbSidebarModule } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { NbSidebarToggleComponent } from './nb-sidebar-toggle/nb-sidebar-toggle.component';
import { NbButtonModule } from '@nebular/theme';
import { NbMenuModule } from '@nebular/theme';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { PaymentsPageComponent } from './payments-page/payments-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ShiftsPageComponent } from './shifts-page/shifts-page.component';
import { AccountPageComponent } from './account-page/account-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ManagerComponent,
    TimetableComponent,
    NbSidebarToggleComponent,
    EmployeePageComponent,
    PaymentsPageComponent,
    DashboardPageComponent,
    ShiftsPageComponent,
    AccountPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbButtonModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
