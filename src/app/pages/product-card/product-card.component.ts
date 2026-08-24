import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product;

  constructor(private cartService: CartService) { }

  addToCart() {

  console.log('Button Clicked');

  this.cartService.addToCart(this.product);

  console.log(this.product);

  alert('Product Added To Cart');
}
  ngOnInit() {
  }

}