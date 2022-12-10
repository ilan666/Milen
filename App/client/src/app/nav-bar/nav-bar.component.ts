import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/Account.service';
import { User } from '../Shared/models/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  openLogin = false;
  openUserProfile = false;
  openCart = false;
  openSideNav = false;
  user: User;

  constructor(private accountService: AccountService) {}

  ngOnInit() {}

  toggleLoginDisplay() {
    this.getUser();
    if (this.user == null || this.user == undefined) {
      if (this.openCart || this.openSideNav) {
        this.openCart = false;
        this.openSideNav = false;
      }
      this.openLogin = !this.openLogin;
    } else {
      this.toggleUserProfileDisplay();
    }
  }

  toggleCartDisplay() {
    if (this.openLogin || this.openSideNav) {
      this.openLogin = false;
      this.openSideNav = false;
    }
    this.openCart = !this.openCart;
  }

  toggleSidenavDisplay() {
    if (this.openLogin || this.openCart) {
      this.openLogin = false;
      this.openCart = false;
    }

    this.openSideNav = !this.openSideNav;
  }

  toggleUserProfileDisplay() {
    if (this.openCart || this.openSideNav) {
      this.openCart = false;
      this.openSideNav = false;
    }
    this.openUserProfile = !this.openUserProfile;
  }

  getUser() {
    // this.accountService.currentUser$.subscribe((user: User) => {
    //   this.user = user;
    // });

    this.user = this.accountService.getUser();
  }
}
