import { EventEmitter, Injectable, Output } from '@angular/core';
import { Shirt } from '../Shared/models/shirt';
import { Jeans } from '../Shared/models/jeans';
import { Shoe } from '../Shared/models/shoe';
import { Coat } from '../Shared/models/coat';
import { Jacket } from '../Shared/models/jacket';
import { Gender } from '../Shared/models/gender.enum';
import { ProductImage } from '../Shared/image';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  tshirts: Shirt[] = [
    new Shirt(
      0,
      'My T-Shirt 1',
      'Shirt',
      ['M', 'L', 'XS'],
      100,
      6,
      '/assets/Cloths_images/IMG-0090.jpg',
      ['black', 'white'],
      Gender.male,
      'My Awesome T-Shirt',
      'New Arrival',
      [
        new ProductImage('/assets/Cloths_images/IMG-0090.jpg'),
        new ProductImage('/assets/Cloths_images/IMG-0090.jpg'),
      ]
    ),
    new Shirt(
      1,
      'My T-Shirt 2',
      'Shirt',
      ['L', 'XS', 'XXL'],
      200,
      18,
      '/assets/Cloths_images/IMG-0090.jpg',
      ['yellow', 'blue', 'green', 'black'],
      Gender.male,
      'My Awesome T-Shirt 2',
      'Sale 40%',
      [
        new ProductImage('/assets/Cloths_images/IMG-0090.jpg'),
        new ProductImage('/assets/Cloths_images/IMG-0090.jpg'),
      ]
    ),
    new Shirt(
      0,
      'My T-Shirt 1',
      'Shirt',
      ['M', 'L', 'XS'],
      100,
      6,
      '/assets/Cloths_images/IMG-0090.jpg',
      ['black', 'white'],
      Gender.male,
      'My Awesome T-Shirt',
      'New Arrival',
      [
        new ProductImage('/assets/Cloths_images/IMG-0090.jpg'),
        new ProductImage('/assets/Cloths_images/IMG-0090.jpg'),
      ]
    ),
    new Shirt(
      1,
      'My T-Shirt 2',
      'Shirt',
      ['L', 'XS', 'XXL'],
      200,
      18,
      '/assets/Cloths_images/IMG-0090.jpg',
      ['yellow', 'blue', 'green', 'black'],
      Gender.male,
      'My Awesome T-Shirt 2',
      'Sale 40%',
      [
        new ProductImage('/assets/Cloths_images/IMG-0090.jpg'),
        new ProductImage('/assets/Cloths_images/IMG-0090.jpg'),
      ]
    ),
    new Shirt(
      0,
      'My T-Shirt 1',
      'Shirt',
      ['M', 'L', 'XS'],
      100,
      6,
      '/assets/Cloths_images/IMG-0090.jpg',
      ['black', 'white'],
      Gender.male,
      'My Awesome T-Shirt',
      'New Arrival',
      [
        new ProductImage('/assets/Cloths_images/IMG-0090.jpg'),
        new ProductImage('/assets/Cloths_images/IMG-0090.jpg'),
      ]
    ),
    new Shirt(
      1,
      'My T-Shirt 2',
      'Shirt',
      ['L', 'XS', 'XXL'],
      200,
      18,
      '/assets/Cloths_images/IMG-0090.jpg',
      ['yellow', 'blue', 'green', 'black'],
      Gender.male,
      'My Awesome T-Shirt 2',
      'Sale 40%',
      [
        new ProductImage('/assets/Cloths_images/IMG-0090.jpg'),
        new ProductImage('/assets/Cloths_images/IMG-0090.jpg'),
      ]
    ),
    new Shirt(
      0,
      'My T-Shirt 1',
      'Shirt',
      ['M', 'L', 'XS'],
      100,
      6,
      '/assets/Cloths_images/IMG-0090.jpg',
      ['black', 'white'],
      Gender.male,
      'My Awesome T-Shirt',
      'New Arrival',
      [
        new ProductImage('/assets/Cloths_images/IMG-0090.jpg'),
        new ProductImage('/assets/Cloths_images/IMG-0090.jpg'),
      ]
    ),
    new Shirt(
      1,
      'My T-Shirt 2',
      'Shirt',
      ['L', 'XS', 'XXL'],
      200,
      18,
      '/assets/Cloths_images/IMG-0090.jpg',
      ['yellow', 'blue', 'green', 'black'],
      Gender.male,
      'My Awesome T-Shirt 2',
      'Sale 40%',
      [
        new ProductImage('/assets/Cloths_images/IMG-0090.jpg'),
        new ProductImage('/assets/Cloths_images/IMG-0090.jpg'),
      ]
    ),
  ];
  jeans: Jeans[];
  shoes: Shoe[];
  coats: Coat[];
  jackets: Jacket[];

  constructor() {}

  getTshirts() {
    return this.tshirts.slice();
  }

  getTshirt(id: number) {
    return this.tshirts[id];
  }
}
