import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {

    if (!this.username || !this.password) {
      alert('Please enter username and password');
      return;
    }

    this.router.navigate(['/login-success']);
  }

}