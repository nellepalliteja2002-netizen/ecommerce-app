import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = [
    {
      id: 1,
      name:'Laptop',
      price: 50000
    },
    {
      id: 2,
      name:'Mobile',
      price:20000
    },
    {
      id: 3,
      name:'Headphones',
      price:3000
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
