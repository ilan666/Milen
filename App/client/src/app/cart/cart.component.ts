import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  displayedColumns = ['id', 'name', 'price', 'product'];
  dataSource = [];

  constructor() {}

  ngOnInit() {}
}
