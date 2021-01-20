import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ManagerComponent } from './manager/manager.component';
import { TimetableComponent } from './timetable/timetable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NbSidebarToggleComponent } from './nb-sidebar-toggle/nb-sidebar-toggle.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { PaymentsPageComponent } from './payments-page/payments-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ShiftsPageComponent } from './shifts-page/shifts-page.component';
import { AccountPageComponent } from './account-page/account-page.component';

import { NbThemeModule, NbLayoutModule, NbInputModule, NbCheckboxModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule } from '@nebular/theme';
import { NbSidebarModule } from '@nebular/theme';
import { NbButtonModule } from '@nebular/theme';
import { NbMenuModule } from '@nebular/theme';
import { NbListModule } from '@nebular/theme';
import { NbCardModule } from '@nebular/theme';
import { NbUserModule } from '@nebular/theme';
import { NbAlertModule } from '@nebular/theme';
import { NbActionsModule } from '@nebular/theme';
import { NbProgressBarModule } from '@nebular/theme';
import { NbWindowModule } from '@nebular/theme';
import { AddEmployeeFormComponent } from './add-employee-form/add-employee-form.component';
import { SchedulerPageComponent } from './scheduler-page/scheduler-page.component';
import { HttpClientModule } from '@angular/common/http';
import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';


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
    AccountPageComponent,
    AddEmployeeFormComponent,
    SchedulerPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbButtonModule,
    NbListModule,
    NbCardModule,
    NbUserModule,
    NbAlertModule,
    NbActionsModule,
    NbCheckboxModule,
    NbInputModule,
    NbWindowModule.forRoot(),
    NbProgressBarModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,

    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
        }),
      ],
        forms: {},
    }),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
