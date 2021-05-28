import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponent } from './../../lib/base-component';
import { Component, OnInit, Input, Output, EventEmitter, Injector } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent extends BaseComponent implements OnInit {

  searchResult: any;
  chude:any;
  nhaxuatban:any;
  formGia:any;
  @Input() searchMember: any;
  constructor(private injector: Injector,private router:Router,private fb:FormBuilder) {
    super(injector);
  }

  ngOnInit(): void {
    this.formGia = this.fb.group({
      'giaMin': [''],
      'giaMax': [''],
    });

    this._api.get('/api/chude/get-all')
    .takeUntil(this.unsubscribe).subscribe(res => {   
      this.chude=res; 
    })
    this._api.get('/api/nhaxuatban/get-all')
    .takeUntil(this.unsubscribe).subscribe(res2 => {  
      this.nhaxuatban=res2; 
    });
    this.renderSearchResult();
  }

  renderSearchResult() {
    if (localStorage.getItem('searchResult')) {
      this.searchResult = JSON.parse(localStorage.getItem('searchResult'));
    }
    else {
      this.searchResult = 'Empty';
    }


  }

  loadPage(page) {
    var lowtoHigh=this.searchResult.lowToHighPrice!==null?this.searchResult.lowToHighPrice:'';
    var newest=this.searchResult.newestFirst!==null?this.searchResult.newestFirst:'';
    this._api.get('/api/sach/search/result/' + this.searchResult.keyWord + '/'
      + this.searchResult.chuDe + '/' + this.searchResult.nxb + '/' + page + '/' + this.searchResult.size
      + '/' + this.searchResult.minPrice + '/' + this.searchResult.maxPrice+ '/'
    )
      .takeUntil(this.unsubscribe).subscribe(res2 => {

        this.searchResult = {
          keyWord: this.searchResult.keyWord,
          data: res2.data,
          total: res2.totalItems,
          chuDe: this.searchResult.chuDe,
          nxb: this.searchResult.nxb,
          minPrice: this.searchResult.minPrice,
          maxPrice: this.searchResult.maxPrice,
          page: page,
          size: this.searchResult.size,
          lowToHighPrice: this.searchResult.lowToHighPrice,
          newestFirst: this.searchResult.newestFirst
        }
        localStorage.setItem('searchResult', JSON.stringify(this.searchResult));
      });
  }

  filterByChuDe(maChuDe){
    var lowtoHigh=this.searchResult.lowToHighPrice!==null?this.searchResult.lowToHighPrice:'';
    var newest=this.searchResult.newestFirst!==null?this.searchResult.newestFirst:'';
    this._api.get('/api/sach/search/result/' + this.searchResult.keyWord + '/'
      + maChuDe + '/' + this.searchResult.nxb + '/' + 1 + '/' + this.searchResult.size
      + '/' + this.searchResult.minPrice + '/' + this.searchResult.maxPrice+ '/'
    )
      .takeUntil(this.unsubscribe).subscribe(res2 => {

        this.searchResult = {
          keyWord: this.searchResult.keyWord,
          data: res2.data,
          total: res2.totalItems,
          chuDe: maChuDe,
          nxb: this.searchResult.nxb,
          minPrice: this.searchResult.minPrice,
          maxPrice: this.searchResult.maxPrice,
          page: 1,
          size: this.searchResult.size,
          lowToHighPrice: this.searchResult.lowToHighPrice,
          newestFirst: this.searchResult.newestFirst
        }
        localStorage.setItem('searchResult', JSON.stringify(this.searchResult));
      });
      this.renderSearchResult();

  }

  filterByNXB(maNXB){
    var lowtoHigh=this.searchResult.lowToHighPrice!==null?this.searchResult.lowToHighPrice:'';
    var newest=this.searchResult.newestFirst!==null?this.searchResult.newestFirst:'';
    this._api.get('/api/sach/search/result/' + this.searchResult.keyWord + '/'
      + this.searchResult.chuDe + '/' + maNXB + '/' + 1 + '/' + this.searchResult.size
      + '/' + this.searchResult.minPrice + '/' + this.searchResult.maxPrice+ '/'
    )
      .takeUntil(this.unsubscribe).subscribe(res2 => {

        this.searchResult = {
          keyWord: this.searchResult.keyWord,
          data: res2.data,
          total: res2.totalItems,
          chuDe: this.searchResult.chuDe,
          nxb:  maNXB,
          minPrice: this.searchResult.minPrice,
          maxPrice: this.searchResult.maxPrice,
          page: 1,
          size: this.searchResult.size,
          lowToHighPrice: this.searchResult.lowToHighPrice,
          newestFirst: this.searchResult.newestFirst
        }
        localStorage.setItem('searchResult', JSON.stringify(this.searchResult));
      });
     this.renderSearchResult();
  }

  filterByPrice(){
    let giaMin = this.formGia.get('giaMin') && this.formGia.get('giaMin').value.trim() != '' ? parseInt(this.formGia.get('giaMin').value.trim()) : 0;
    let giaMax = this.formGia.get('giaMax') && this.formGia.get('giaMax').value.trim() != '' ? parseInt(this.formGia.get('giaMax').value.trim() ): 1000000000;
    this._api.get('/api/sach/search/result/' + this.searchResult.keyWord + '/'
    + this.searchResult.chuDe + '/' + this.searchResult.nxb + '/' + 1 + '/' + this.searchResult.size
    + '/' + giaMin + '/' + giaMax+ '/'
  )
    .takeUntil(this.unsubscribe).subscribe(res2 => {

      this.searchResult = {
        keyWord: this.searchResult.keyWord,
        data: res2.data,
        total: res2.totalItems,
        chuDe: this.searchResult.chuDe,
        nxb:  this.searchResult.nxb,
        minPrice: this.searchResult.minPrice,
        maxPrice: this.searchResult.maxPrice,
        page: 1,
        size: this.searchResult.size,
        lowToHighPrice: this.searchResult.lowToHighPrice,
        newestFirst: this.searchResult.newestFirst
      }
      localStorage.setItem('searchResult', JSON.stringify(this.searchResult));
    });
   this.renderSearchResult();
  }
}