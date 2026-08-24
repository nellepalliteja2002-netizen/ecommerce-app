import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems = [];

  constructor() { }

  addToCart(product) {
    this.cartItems.push(product);
  }

  getCartItems() {
    return this.cartItems;
  }

  removeItem(index) {
    this.cartItems.splice(index, 1);
  }

}