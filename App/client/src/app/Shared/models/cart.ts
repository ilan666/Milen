import { Product } from './product';
export class Cart {
  id: number;
  userId: number;
  username: string;
  products: Product[];
  productsLimit: number = 30;
  createdAt: Date;
  totalPrice: number;
}
