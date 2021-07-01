import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMultiItemAccesoriesComponent } from './carousel-multi-item-accesories.component';

describe('CarouselMultiItemAccesoriesComponent', () => {
  let component: CarouselMultiItemAccesoriesComponent;
  let fixture: ComponentFixture<CarouselMultiItemAccesoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselMultiItemAccesoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselMultiItemAccesoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
