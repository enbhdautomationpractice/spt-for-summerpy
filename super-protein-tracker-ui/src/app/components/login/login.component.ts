import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { ToastrService } from '../../common/toastr.service';

declare let toastr;

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName;
  password;
  mouseoverLogin: boolean;

  constructor(private auth: AuthService, private router: Router, private toastr: ToastrService) {
  }

  login(formValues) {
    if (this.auth.loginUser(formValues.userName, formValues.password)) {
      this.toastr.success("Authentication successful");
      if (this.auth.isAdmin()) {
        this.router.navigateByUrl('/admin');
      } else {
        this.router.navigateByUrl('/user/view/' + this.auth.getCurrentUser());
      }
    } else {
      this.toastr.error("Wrong credentials");
      this.router.navigateByUrl('/home');
    }
  }

  cancel() {
    this.router.navigateByUrl('/home');
  }

}
