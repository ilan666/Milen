import { Gender } from './gender.enum';
import { ProductImage } from '../image';

export class Shirt {
  constructor(
    public id: number,
    public name: string,
    public type = 'Shirt',
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

  // id: number;
  // name: string;
  // type = 'Shirt';
  // size: string;
  // price: number;
  // quantity: number;
  // imgPath: string;
  // color: string[];
  // gender: Gender;
  // description: string;
  // prefix: string;
  // images: Image[];
}
