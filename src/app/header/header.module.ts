
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TintucComponent } from './tintuc/tintuc.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';


const routers: Routes = [
  // {
  //   path: 'tintuc', component: TintucComponent,
  // },
  // {
  //   path: 'gioithieu', component: GioithieuComponent,
  // },

]

@NgModule({
  declarations: [TintucComponent, GioithieuComponent],
  imports: [
    CommonModule,NgModule,
    RouterModule,
    RouterModule.forChild(routers),
  ]
})
export class HeaderModule { }
