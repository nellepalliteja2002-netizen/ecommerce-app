import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MangoesComponent } from './pages/mangoes/mangoes.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { OtpComponent } from './pages/otp/otp.component';
import { LoginSuccessComponent } from './pages/login-success/login-success.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { AdminOtpComponent } from './pages/admin-otp/admin-otp.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { PasswordSuccessComponent } from './pages/password-success/password-success.component';
import { WhatsappLoginSuccessComponent } from './pages/whatsapp-login-success/whatsapp-login-success.component';
import { CustomerHomeComponent } from './pages/customer-home/customer-home.component';
const routes: Routes = [
  { path: 'reset-password', component: ResetPasswordComponent },

  { path: '', component: HomeComponent },
  { path: 'mangoes', component: MangoesComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'login-success', component: LoginSuccessComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'admin-otp', component: AdminOtpComponent },
  { path: 'password-success', component: PasswordSuccessComponent },
  { path: 'whatsapp-login-success',component: WhatsappLoginSuccessComponent},
  { path: 'customer-home',component: CustomerHomeComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
