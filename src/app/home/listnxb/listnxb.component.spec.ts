import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListnxbComponent } from './listnxb.component';

describe('ListnxbComponent', () => {
  let component: ListnxbComponent;
  let fixture: ComponentFixture<ListnxbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListnxbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListnxbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
