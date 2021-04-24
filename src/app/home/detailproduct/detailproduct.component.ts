import { BaseComponent } from './../../lib/base-component';
import { Component, OnInit, Injector} from '@angular/core';
import { Observable} from 'rxjs';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil'; 

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent extends BaseComponent implements OnInit {
  sach:any;
  chude:any;
  nhaxuatban:any;
  tuongtu:any;
  constructor(injector: Injector) { 
    super(injector);
  }
  ngOnInit(): void {
    this.sach = {};
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('/api/sach/get-by-id/'+id).takeUntil(this.unsubscribe).subscribe(res => {
        this.sach = res;
        setTimeout(() => {
          this.loadScripts();
        });
      }); 
    });err => {};

    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('/api/sach/get-tuongtu/'+id).takeUntil(this.unsubscribe).subscribe(res => {
        this.tuongtu = res;
      });
      });

    this.chude = {};
    this._api.get('/api/chude/get-all')
    .takeUntil(this.unsubscribe).subscribe(res2 => {
      console.log(res2);   
      this.chude=res2; 
    })
    this.nhaxuatban = {};
    this._api.get('/api/nhaxuatban/get-all')
    .takeUntil(this.unsubscribe).subscribe(res2 => {
      console.log(res2);   
      this.nhaxuatban=res2; 
    }), err => { };

  }
  addToCart(it) { 
    this._cart.addToCart(it);
    alert('Thêm thành công!'); 
  }
}