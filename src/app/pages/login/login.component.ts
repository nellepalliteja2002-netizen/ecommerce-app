import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  sendOtp(mobile: string) {

    console.log('Mobile:', mobile);

    if (!mobile || mobile.length !== 10) {
      alert('Please enter a valid 10 digit mobile number');
      return;
    }

    this.router.navigate(['/otp']);
  }

  continueWithWhatsapp() {
  this.router.navigate(['/whatsapp-login-success']);
}

}