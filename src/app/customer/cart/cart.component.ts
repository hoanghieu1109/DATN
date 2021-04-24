import { BaseComponent } from 'src/app/lib/base-component';
import { Component, OnInit, Injector } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent extends BaseComponent implements OnInit {
  items:any;
  total:any;
  constructor(injector: Injector) { 
    super(injector);
  }
  ngOnInit(): void {
    this._cart.items.subscribe((res) => {
      this.items = res;
      this.total = 0;
      for(let x of this.items){ 
        x.money = x.quantity * x.giaban;
        this.total += x.quantity * x.giaban;
      } 
    });
  } 
  clearCart() { 
    this._cart.clearCart();
    alert('Xóa thành công'); 
  }
  addQty(item, quantity){ 
    item.quantity =  quantity;
    item.money =  Number.parseInt(item.quantity) *  item.giaban;
    this._cart.addQty(item);
  }
}


