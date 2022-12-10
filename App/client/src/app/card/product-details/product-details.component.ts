import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Shirt } from '../../Shared/models/shirt';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product!: Shirt;
  colorList: string[] = [
    'white',
    'black',
    'bisque',
    'yellow',
    'pink',
    'green',
    'gray',
  ];

  sizeList: string[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  constructor(
    private ProductService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    const productID = this.route.snapshot.paramMap.get('id') as string;

    // this.ProductService.getTshirt(productID).subscribe((product: Shirt) => {
    //   this.product = product;
    // });

    this.product = this.ProductService.getTshirt(productID as any);
  }
}
