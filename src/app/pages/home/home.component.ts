import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  title: string = 'Suresh Mango Farms';

  constructor() { }

  ngOnInit(): void {
    console.log('Home Component Loaded');
  }

  shopNow(): void {
    alert('Welcome to Suresh Mango Farms!');
  }

}
