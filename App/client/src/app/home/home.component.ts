import { Component, OnInit } from '@angular/core';
import { Shirt } from '../Shared/models/shirt';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tshirts: Shirt[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getTShirts();
  }

  getTShirts() {
    this.tshirts = this.productService.getTshirts();
  }
}
