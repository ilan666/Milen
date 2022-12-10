import { ElementRef, ViewChild } from '@angular/core';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-cart-nav',
  templateUrl: './cart-nav.component.html',
  styleUrls: ['./cart-nav.component.scss'],
})
export class CartNavComponent implements OnInit {
  @Output() isOpen = new EventEmitter();
  fadeOut = false;

  constructor() {}

  ngOnInit() {}

  // Animate out
  @HostListener('mouseleave') onMouseLeave() {
    this.fadeOut = true;
    setInterval(() => {
      this.isOpen.emit();
    }, 300);
  }
}
