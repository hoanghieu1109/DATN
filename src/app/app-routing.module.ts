import { CheckoutComponent } from './customer/checkout/checkout.component';

import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './customer/cart/cart.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then((m) => m.CustomerModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  // {
  //   path: 'cart', component: CartComponent,
  // },
  // {
  //   path: '', loadChildren:()=>(import('./home/home.module').then(x=>x.HomeModule)),
  // },
  // {
  //   path: 'product',
  //   loadChildren: () => import('./product/product.module').then((m) => m.ProductModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
