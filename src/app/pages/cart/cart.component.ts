import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
cartItems = [
  {
    name: 'Banganapalli',
    price: 250,
    qty: 2
  },
  {
    name: 'Alphonso',
    price: 350,
    qty: 1
  }
];
}
