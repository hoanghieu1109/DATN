import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListchudeComponent } from './listchude.component';

describe('ListchudeComponent', () => {
  let component: ListchudeComponent;
  let fixture: ComponentFixture<ListchudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListchudeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListchudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
