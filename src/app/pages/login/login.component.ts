import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';

  constructor() { }

  ngOnInit() {
  }

  login() {

    console.log(this.email);
    console.log(this.password);

    alert('Login Success');

  }

}