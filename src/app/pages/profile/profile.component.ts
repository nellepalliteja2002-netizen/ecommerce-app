import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  name = 'Teja';
  email = 'teja@gmail.com';
  address = 'Bangalore';
  phone = '8463940742';

  constructor() { }

  ngOnInit() {
    console.log('Profile Loaded');
  }

  editProfile() {
    alert('Edit Profile Clicked');
  }

}