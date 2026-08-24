import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productId;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.productId =

    this.route.snapshot.paramMap.get('id');

    console.log(this.productId);
  }

}
