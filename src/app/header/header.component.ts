import { Router } from '@angular/router';
import { Component, OnInit,Injector } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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

formSearch:any;
  constructor(injector: Injector,private fb:FormBuilder,private router:Router) { 
    super(injector);
  }

  ngOnInit(): void {
    this.buildFormSearch();
    this._api.get('/api/chude/get-all')
    .takeUntil(this.unsubscribe).subscribe(res => {
      this.chude=res; 
    })
    this._api.get('/api/nhaxuatban/get-all')
    .takeUntil(this.unsubscribe).subscribe(res2 => { 
      this.nhaxuatban=res2; 
    });
    
    this._cart.items.subscribe((res) => {
      this.total = res? res.length:0;
    });
    this._cart.items.subscribe((res) => {
      this.total = res? res.length:0;
    });
  }

  buildFormSearch(){
    this.formSearch = this.fb.group({
      'keyWord': [''],
    });
  }
  search(){
    let keyWord = this.formSearch.get('keyWord') && this.formSearch.get('keyWord').value.trim() != '' ? this.formSearch.get('keyWord').value.trim() : '%20';
    this._api.get('/api/sach/search/result/'+keyWord)
    .takeUntil(this.unsubscribe).subscribe(res2 => {
      let searchResult ={
        keyWord: keyWord,
        data: res2.data,
        total: res2.totalItems,
        chuDe:0,
        nxb:0,
        minPrice: 0,
        maxPrice: 0,
        page:1,
        size:12,
        lowToHighPrice: null,
        newestFirst:null
      }
  
      
      localStorage.setItem('searchResult', JSON.stringify(searchResult)); 
      this.router.navigate(['/search/result']);
    });
  }
}
