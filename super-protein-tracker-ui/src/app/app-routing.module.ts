import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./components/admin/admin.component";
import { HomeComponent } from "./components/home/home.component";
import { AdminViewRegistrationComponent } from "./components/admin-view-registration/admin-view-registration.component";
import { UserViewRegistrationComponent } from "./components/user-view-registration/user-view-registration.component";
import { LoginComponent } from "./components/login/login.component";
import { UsersComponent } from "./components/users/users.component";
import { Error404Component } from "./errors/404.component";
import { AuthService } from "./services/auth.service";
import { AdminRouteActivator } from "./route-activators/admin-route-activator.service";
import { UserRouteActivator } from "./route-activators/user-route-activator.service";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user/view/:id', component: UserViewRegistrationComponent, canActivate: [UserRouteActivator] },
  { path: 'admin/view/:id', component: AdminViewRegistrationComponent, canActivate: [AdminRouteActivator] },
  { path: 'admin', component: AdminComponent, canActivate: [AdminRouteActivator] },
  { path: 'login', component: LoginComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  constructor(authService: AuthService) {

  }
}
