import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMultiItemCapsComponent } from './carousel-multi-item-caps.component';

describe('CarouselMultiItemCapsComponent', () => {
  let component: CarouselMultiItemCapsComponent;
  let fixture: ComponentFixture<CarouselMultiItemCapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselMultiItemCapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselMultiItemCapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
