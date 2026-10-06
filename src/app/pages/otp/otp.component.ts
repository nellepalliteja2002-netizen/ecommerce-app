import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  countdown: number = 30;

  constructor() { }

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer() {
    const timer = setInterval(() => {

      if (this.countdown > 0) {
        this.countdown--;
      } else {
        clearInterval(timer);
      }

    }, 1000);
  }

}