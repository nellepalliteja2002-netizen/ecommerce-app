import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  name ='';
    address ='';
    phone ='';
    paymentMethod ='';

  constructor() {}

  ngOnInit() {
  }

  placeOrder() {

    console.log(this.name);
    console.log(this.address);
    console.log(this.phone);

    console.log(this.paymentMethod);

    alert('Order Placed Successfully');

  }

}
