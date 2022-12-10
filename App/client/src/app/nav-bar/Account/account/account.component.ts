import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/Shared/models/user';
import { AccountService } from '../../../services/Account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  currentUser$: Observable<User>;
  user: User;
  @Output() isOpen = new EventEmitter();
  fadeOut = false;

  constructor(private accountService: AccountService) {
    this.currentUser$ = this.accountService.currentUser$;
  }

  ngOnInit() {
    this.getUser();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.fadeOut = true;
    setInterval(() => {
      this.isOpen.emit();
    }, 300);
  }

  getUser() {
    this.user = this.accountService.getUser();
  }
}
