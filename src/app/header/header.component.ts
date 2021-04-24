import { Component, OnInit,Injector } from '@angular/core';
import { BaseComponent } from './../lib/base-component';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {
  chude:any;
  nhaxuatban:any;
  total:any;
  constructor(injector: Injector) { 
    super(injector);
  }

  ngOnInit(): void {
    
    this._api.get('/api/chude/get-all')
    .takeUntil(this.unsubscribe).subscribe(res => {
      console.log(res);   
      this.chude=res; 
    })
    this._api.get('/api/nhaxuatban/get-all')
    .takeUntil(this.unsubscribe).subscribe(res2 => {
      console.log(res2);   
      this.nhaxuatban=res2; 
    });
    
    this._cart.items.subscribe((res) => {
      this.total = res? res.length:0;
    });
    this._cart.items.subscribe((res) => {
      this.total = res? res.length:0;
    });
  }

}
