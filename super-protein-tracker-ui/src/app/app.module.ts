import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProteinTrackerService } from "./services/protein-tracker.service";
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { AdminViewRegistrationComponent } from './components/admin-view-registration/admin-view-registration.component';
import { UserViewRegistrationComponent } from './components/user-view-registration/user-view-registration.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AuthService } from "./services/auth.service";
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { ToastrService } from './common/toastr.service';
import { Error404Component } from './errors/404.component';
import { AdminRouteActivator } from './route-activators/admin-route-activator.service';
import { UserRouteActivator } from './route-activators/user-route-activator.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    AdminViewRegistrationComponent,
    UserViewRegistrationComponent,
    NavBarComponent,
    LoginComponent,
    UsersComponent,
    Error404Component,
  ],
  providers: [
    ProteinTrackerService,
    AuthService,
    ToastrService,
    AdminRouteActivator,
    UserRouteActivator,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
