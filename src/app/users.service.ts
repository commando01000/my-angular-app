import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}
  sayHi() {
    console.log('Hii');
  }
  userName:string = 'Supraa';

    products: Product[] = [
    {
      productName: 'HP',
      productPrice: 20000,
      productDescription: 'laptop',
      productImage: 'https://picsum.photos/200',
    },
    {
      productName: 'Dell',
      productPrice: 30000,
      productDescription: 'laptop',
      productImage: 'https://picsum.photos/200',
    },
    {
      productName: 'Mac',
      productPrice: 90000,
      productDescription: 'laptop',
      productImage: 'https://picsum.photos/200',
    }
  ]
}
