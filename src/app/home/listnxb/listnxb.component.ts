import { BaseComponent } from './../../lib/base-component';
import { Component, Injector, OnInit } from '@angular/core';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
import { takeUntil } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-listnxb',
  templateUrl: './listnxb.component.html',
  styleUrls: ['./listnxb.component.css']
})
export class ListnxbComponent extends BaseComponent implements OnInit {

  spchude : any;
  spnxb : any;
  list_item:any;
  chude:any;
  nhaxuatban:any;
  listpage: any;
  page: any;
  pageSize: any;
  totalSachs:any;
  item_group_id:any;
  constructor(injector : Injector) { 
    super(injector);
   }

  ngOnInit(): void {
    this.spchude = [];
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('/api/sach/sp-get-by-chude/'+id).pipe(takeUntil(this.unsubscribe)).subscribe((res: any) => {
        this.spchude = res;
        setTimeout(() => {
          this.loadScripts();
        });
      }); 
    });
    this.spnxb = [];
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('/api/sach/sp-get-by-nxb/'+id).pipe(takeUntil(this.unsubscribe)).subscribe((res: any) => {
        this.spnxb = res;
        setTimeout(() => {
          this.loadScripts();
        });
      }); 
    });

    Observable.combineLatest(
      this._api.get('/api/sach/get-all')
    ).takeUntil(this.unsubscribe).subscribe(res => {
      console.log(res);
      this.list_item = res[0];
      console.log(this.list_item);
      setTimeout(() => {
        this.loadScripts();
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