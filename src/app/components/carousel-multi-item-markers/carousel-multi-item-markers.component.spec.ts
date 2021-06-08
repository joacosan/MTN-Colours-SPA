import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMultiItemMarkersComponent } from './carousel-multi-item-markers.component';

describe('CarouselMultiItemMarkersComponent', () => {
  let component: CarouselMultiItemMarkersComponent;
  let fixture: ComponentFixture<CarouselMultiItemMarkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselMultiItemMarkersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselMultiItemMarkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
