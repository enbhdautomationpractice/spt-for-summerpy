import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: string;
  private isUserAdmin: boolean;
  private adminList: string[] = ['admin', 'bogdan'];

  loginUser(userName: string, password: string): boolean {
    if (userName === password) {
      this.currentUser = userName;
      this.isUserAdmin = this.adminList.includes(this.currentUser);
      return true;
    };

    return false;
  }

  logoutUser() {
    this.currentUser = '';
    this.isUserAdmin = false;
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  isAdmin(): boolean {
    return this.isUserAdmin;
  }

  getCurrentUser(): string {
    return this.currentUser;
  }
}
