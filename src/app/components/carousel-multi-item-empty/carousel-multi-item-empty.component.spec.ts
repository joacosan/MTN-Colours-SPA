import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMultiItemEmptyComponent } from './carousel-multi-item-empty.component';

describe('CarouselMultiItemEmptyComponent', () => {
  let component: CarouselMultiItemEmptyComponent;
  let fixture: ComponentFixture<CarouselMultiItemEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselMultiItemEmptyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselMultiItemEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
