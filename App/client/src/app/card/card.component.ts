import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Shared/models/product';
import { Shirt } from '../Shared/models/shirt';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  stars = 5;

  @Input() tshirt!: Shirt;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  selectProduct() {
    this.router.navigateByUrl('/product/' + this.tshirt.id);
  }
}
