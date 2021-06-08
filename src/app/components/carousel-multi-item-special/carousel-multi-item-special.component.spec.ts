import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMultiItemSpecialComponent } from './carousel-multi-item-special.component';

describe('CarouselMultiItemSpecialComponent', () => {
  let component: CarouselMultiItemSpecialComponent;
  let fixture: ComponentFixture<CarouselMultiItemSpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselMultiItemSpecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselMultiItemSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
