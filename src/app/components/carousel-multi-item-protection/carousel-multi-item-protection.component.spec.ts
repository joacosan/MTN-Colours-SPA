import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMultiItemProtectionComponent } from './carousel-multi-item-protection.component';

describe('CarouselMultiItemProtectionComponent', () => {
  let component: CarouselMultiItemProtectionComponent;
  let fixture: ComponentFixture<CarouselMultiItemProtectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselMultiItemProtectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselMultiItemProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
