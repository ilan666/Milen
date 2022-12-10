import { Gender } from './gender.enum';
import { ProductImage } from '../image';

export class Shoe {
  constructor(
    public id: number,
    public name: string,
    public type = 'Shoe',
    public size: string[],
    public price: number,
    public quantity: number,
    public imgPath: string,
    public color: string[],
    public gender: Gender,
    public description: string,
    public prefix: string,
    public images: ProductImage[]
  ) {}
}
