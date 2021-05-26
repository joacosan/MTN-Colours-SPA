import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMultiItemGraffitiComponent } from './carousel-multi-item-graffiti.component';

describe('CarouselMultiItemGraffitiComponent', () => {
  let component: CarouselMultiItemGraffitiComponent;
  let fixture: ComponentFixture<CarouselMultiItemGraffitiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselMultiItemGraffitiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselMultiItemGraffitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
