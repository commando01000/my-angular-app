import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  constructor() {
    let myService = new UsersService();
    this.products = myService.products;
    myService.sayHi();
    console.log(myService.userName);
  }

  ngOnInit() {}

  // userName: string = 'Supraa';
  // userAge: number = 25;
  // onSale:boolean = false;
  // price:number = 3000;
  // link:string = 'https://google.com';
  // imgURL:string = 'https://picsum.photos/200';

  // products: Product[] = [
  //   {
  //     productName: 'HP',
  //     productPrice: 20000,
  //     productDescription: 'laptop',
  //     productImage: 'https://picsum.photos/200',
  //   },
  //   {
  //     productName: 'Dell',
  //     productPrice: 30000,
  //     productDescription: 'laptop',
  //     productImage: 'https://picsum.photos/200',
  //   },
  //   {
  //     productName: 'Mac',
  //     productPrice: 90000,
  //     productDescription: 'laptop',
  //     productImage: 'https://picsum.photos/200',
  //   }
  // ]

  // welcome() {
  //   alert('welcome');
  // }
}
