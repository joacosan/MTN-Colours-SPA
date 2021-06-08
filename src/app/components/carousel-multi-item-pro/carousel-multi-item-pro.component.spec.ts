import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMultiItemProComponent } from './carousel-multi-item-pro.component';

describe('CarouselMultiItemProComponent', () => {
  let component: CarouselMultiItemProComponent;
  let fixture: ComponentFixture<CarouselMultiItemProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselMultiItemProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselMultiItemProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
