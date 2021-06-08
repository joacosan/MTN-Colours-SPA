import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMultiItemRefillsComponent } from './carousel-multi-item-refills.component';

describe('CarouselMultiItemRefillsComponent', () => {
  let component: CarouselMultiItemRefillsComponent;
  let fixture: ComponentFixture<CarouselMultiItemRefillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselMultiItemRefillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselMultiItemRefillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
