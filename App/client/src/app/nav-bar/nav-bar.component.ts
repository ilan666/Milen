import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  openLogin = false;

  constructor(private observer: BreakpointObserver) {}

  ngOnInit() {}

  toggleDisplay() {
    this.openLogin = !this.openLogin;
  }
}
