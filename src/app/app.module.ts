import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MangoesComponent } from './pages/mangoes/mangoes.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ReviewOrderComponent } from './pages/review-order/review-order.component';
import { OrderSuccessComponent } from './pages/order-success/order-success.component';
import { LoginComponent } from './pages/login/login.component';
import { OtpComponent } from './pages/otp/otp.component';
import { LoginSuccessComponent } from './pages/login-success/login-success.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { AdminOtpComponent } from './pages/admin-otp/admin-otp.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { PasswordSuccessComponent } from './pages/password-success/password-success.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MangoesComponent,
    CartComponent,
    CheckoutComponent,
    ReviewOrderComponent,
    OrderSuccessComponent,
    LoginComponent,
    OtpComponent,
    LoginSuccessComponent,
    AdminLoginComponent,
    ForgotPasswordComponent,
    AdminOtpComponent,
    ResetPasswordComponent,
    PasswordSuccessComponent

  ],
    
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
