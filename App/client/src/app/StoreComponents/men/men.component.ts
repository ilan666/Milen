import { Component, OnInit } from '@angular/core';
import { Coat } from 'src/app/Shared/models/coat';
import { Jacket } from 'src/app/Shared/models/jacket';
import { Jeans } from 'src/app/Shared/models/jeans';
import { Product } from 'src/app/Shared/models/product';
import { Shirt } from 'src/app/Shared/models/shirt';
import { Shoe } from 'src/app/Shared/models/shoe';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss'],
})
export class MenComponent implements OnInit {
  tshirts: Shirt[];
  jeans: Jeans[];
  shoes: Shoe[];
  coats: Coat[];
  jackets: Jacket[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getTshirts();
  }

  getTshirts() {
    this.tshirts = this.productService.getTshirts();
  }
}
