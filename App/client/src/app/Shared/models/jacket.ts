import { Gender } from './gender.enum';
import { ProductImage } from '../image';

export class Jacket {
  constructor(
    public id: number,
    public name: string,
    public type = 'Jacket',
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
