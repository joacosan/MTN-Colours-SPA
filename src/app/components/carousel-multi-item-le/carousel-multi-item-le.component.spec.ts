import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMultiItemLeComponent } from './carousel-multi-item-le.component';

describe('CarouselMultiItemLeComponent', () => {
  let component: CarouselMultiItemLeComponent;
  let fixture: ComponentFixture<CarouselMultiItemLeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselMultiItemLeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselMultiItemLeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
