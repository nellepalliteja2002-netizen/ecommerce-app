import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mangoes',
  templateUrl: './mangoes.component.html',
  styleUrls: ['./mangoes.component.scss']
})
export class MangoesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
mangoes = [
  {
    name: 'Banganapalli',
    desc: 'Sweet & Delicious',
    price: 250,
    qty: 1,
    image: 'assets/banganapalli.jpg'
  },
  {
    name: 'Alphonso',
    desc: 'Rich Aroma & Naturally Sweet',
    price: 350,
    qty: 1,
    image: 'assets/alphonso.jpg'
  },
  {
    name: 'Sindhura',
    desc: 'Juicy & Fiberless',
    price: 300,
    qty: 1,
    image: 'assets/sindhura.jpg'
  }
];
}
