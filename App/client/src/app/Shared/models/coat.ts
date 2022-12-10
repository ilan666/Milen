import { Gender } from './gender.enum';
import { ProductImage } from '../image';

export class Coat {
  constructor(
    public id: number,
    public name: string,
    public type = 'Coat',
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
