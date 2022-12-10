import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Output() isOpen = new EventEmitter();
  fadeOut = false;

  constructor() {}

  ngOnInit() {}

  @HostListener('mouseleave') onMouseLeave() {
    this.fadeOut = true;
    setInterval(() => {
      this.isOpen.emit();
    }, 300);
  }
}
