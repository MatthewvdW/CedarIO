// Modules //
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

// Components //
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { DevicesComponent } from './components/devices/devices.component';
import { UsersComponent } from './components/users/users.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { ClassesComponent } from './components/classes/classes.component';
import { WebappComponent } from './components/webapp/webapp.component';
import { LoginComponent } from './components/login/login.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LogsComponent } from './components/logs/logs.component';
import { AccountComponent } from './components/account/account.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { SupportComponent } from './components/support/support.component';

// Servies //

// Decorator //
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    TicketsComponent,
    DevicesComponent,
    UsersComponent,
    BookingsComponent,
    ClassesComponent,
    WebappComponent,
    LoginComponent,
    SettingsComponent,
    LogsComponent,
    AccountComponent,
    NotificationsComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
