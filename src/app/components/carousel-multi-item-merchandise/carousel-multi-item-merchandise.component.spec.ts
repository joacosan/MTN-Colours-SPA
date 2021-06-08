import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMultiItemMerchandiseComponent } from './carousel-multi-item-merchandise.component';

describe('CarouselMultiItemMerchandiseComponent', () => {
  let component: CarouselMultiItemMerchandiseComponent;
  let fixture: ComponentFixture<CarouselMultiItemMerchandiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselMultiItemMerchandiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselMultiItemMerchandiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
