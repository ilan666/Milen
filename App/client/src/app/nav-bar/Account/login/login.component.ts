import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { AccountService } from '../../../services/Account.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/Shared/models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  currentUser$: Observable<User>;
  @Output() isOpen = new EventEmitter();
  fadeOut = false;

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

  // Animate out
  @HostListener('mouseleave') onMouseLeave() {
    this.fadeOut = true;
    setInterval(() => {
      this.isOpen.emit();
    }, 300);
  }
}
