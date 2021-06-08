import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMultiItemApparealComponent } from './carousel-multi-item-appareal.component';

describe('CarouselMultiItemApparealComponent', () => {
  let component: CarouselMultiItemApparealComponent;
  let fixture: ComponentFixture<CarouselMultiItemApparealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselMultiItemApparealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselMultiItemApparealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
