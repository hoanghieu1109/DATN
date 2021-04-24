import { GioithieuComponent } from './../header/gioithieu/gioithieu.component';
import { TintucComponent } from './../header/tintuc/tintuc.component';
import { LoginComponent } from './../customer/login/login.component';
import { CheckoutComponent } from './../customer/checkout/checkout.component';
import { ListchudeComponent } from './../home/listchude/listchude.component';
import { DetailproductComponent } from './../home/detailproduct/detailproduct.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { CartComponent } from '../customer/cart/cart.component';
import { ListnxbComponent } from './listnxb/listnxb.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'detailproduct/:id', component: DetailproductComponent,
  },
  {
    path: 'cart', component: CartComponent,
  },
  {
    path: 'checkout', component: CheckoutComponent,
  },
  {  
    path:'listchude/:id',component: ListchudeComponent,
  },
  {  
    path:'listnxb/:id',component: ListnxbComponent,
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'tintuc', component: TintucComponent,
  },
  {
    path: 'gioithieu', component: GioithieuComponent,
  },
  
]

@NgModule({
  declarations: [HomeComponent,ListchudeComponent,DetailproductComponent, ListnxbComponent],
  imports: [
    CommonModule,NgbModule,
    RouterModule,
    RouterModule.forChild(routes),

  ]
})
export class HomeModule { }