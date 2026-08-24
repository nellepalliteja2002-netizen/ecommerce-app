import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems = [];
  totalPrice = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {

    this.cartItems = this.cartService.getCartItems();

    this.calculateTotal();

  }

  calculateTotal() {

    this.totalPrice = 0;

    for (let item of this.cartItems) {

      this.totalPrice =
        this.totalPrice + item.price;

    }

    

  }
  removeItem(index) {

  this.cartService.removeItem(index);

  this.calculateTotal();

}

}
