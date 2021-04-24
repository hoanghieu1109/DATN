import { BaseComponent } from './../lib/base-component';
import { Component, OnInit,Injector } from '@angular/core';
import { Observable} from 'rxjs';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil'; 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit {
  list_item:any;
  list_item_new:any;
  chude:any;
  nhaxuatban:any;
  listpage: any;
  page: any;
  pageSize: any;
  totalSachs:any;
  item_group_id:any;
  constructor(injector: Injector) { 
    super(injector);
  }

  ngOnInit(): void {
    Observable.combineLatest(
      this._api.get('/api/sach/get-all')
    ).takeUntil(this.unsubscribe).subscribe(res => {
      console.log(res);
      this.list_item = res[0];
      console.log(this.list_item);
      setTimeout(() => {
        this.loadScripts();
        Observable.combineLatest(
          this._api.get('/api/sach/get-new'),
        ).takeUntil(this.unsubscribe).subscribe(res => {
          this.list_item_new = res[0];
        }, err => {});
      });
    }, err => {});
    this._api.get('/api/chude/get-all')
    .takeUntil(this.unsubscribe).subscribe(res2 => {
      console.log(res2);   
      this.chude=res2; 
    })
    this._api.get('/api/nhaxuatban/get-all')
    .takeUntil(this.unsubscribe).subscribe(res2 => {
      console.log(res2);   
      this.nhaxuatban=res2; 
    }), err => { };
    this.listpage = [];
    this.page = 1;
    this.pageSize = 8;
    this._route.params.subscribe(params => {
      this.item_group_id = params['id'];
      this._api.post('/api/sach/search', { page: this.page, pageSize: this.pageSize}).takeUntil(this.unsubscribe).subscribe(res => {
        this.listpage = res.data;
        this.totalSachs = res.totalSachs;
        }, err => { });       
    }); 
  }
  addToCart(it) { 
    this._cart.addToCart(it);
    alert('Thêm thành công!'); 

}
loadPage(page) { 
this._route.params.subscribe(params => {
  let id = params['id'];
  this._api.post('/api/sach/search', { page: page, pageSize: this.pageSize}).takeUntil(this.unsubscribe).subscribe(res => {
    this.listpage = res.data;
    this.totalSachs = res.totalSachs;
    }, err => { });       
});   
    
}

}