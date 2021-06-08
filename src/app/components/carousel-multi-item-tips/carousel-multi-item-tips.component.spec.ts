import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMultiItemTipsComponent } from './carousel-multi-item-tips.component';

describe('CarouselMultiItemTipsComponent', () => {
  let component: CarouselMultiItemTipsComponent;
  let fixture: ComponentFixture<CarouselMultiItemTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselMultiItemTipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselMultiItemTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
