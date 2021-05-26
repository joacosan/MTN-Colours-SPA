import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMultiItemShopComponent } from './carousel-multi-item-shop.component';

describe('CarouselMultiItemShopComponent', () => {
  let component: CarouselMultiItemShopComponent;
  let fixture: ComponentFixture<CarouselMultiItemShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselMultiItemShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselMultiItemShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
