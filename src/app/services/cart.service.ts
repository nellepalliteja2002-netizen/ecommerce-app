import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems =
    new BehaviorSubject<any[]>([]);

  cartItems$ =
    this.cartItems.asObservable();

  constructor() { }

  addToCart(product) {

    const currentItems =
      this.cartItems.value;

    this.cartItems.next([
      ...currentItems,
      product
    ]);

  }

  removeItem(index) {

    const updatedItems =
      [...this.cartItems.value];

    updatedItems.splice(index, 1);

    this.cartItems.next(updatedItems);

  }

}