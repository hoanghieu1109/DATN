import { HeaderComponent } from './../header/header.component';
import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
  },

  {
    path: 'checkout',
    component: CheckoutComponent,
  },

  // {
  //   path: 'login',
  //   component: LoginComponent,
  // }, 
  
  
]; 

@NgModule({
  declarations: [CartComponent, CheckoutComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    
  ]
})
export class CustomerModule { }
