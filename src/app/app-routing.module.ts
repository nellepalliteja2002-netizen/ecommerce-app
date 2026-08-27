import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { RegisterComponent } from './pages/register/register.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'products/:id',
    component: ProductDetailsComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }