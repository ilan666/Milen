import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountService } from '../../services/Account.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  currentUser$: Observable<User>;

  constructor(private accountService: AccountService, private fb: FormBuilder) {
    this.currentUser$ = this.accountService.currentUser$;
  }

  ngOnInit() {
    this.loginFormInit();
  }

  login() {
    this.accountService.login(this.loginForm.value).subscribe((res) => {
      console.log(res);
    });
  }

  loginFormInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
}
