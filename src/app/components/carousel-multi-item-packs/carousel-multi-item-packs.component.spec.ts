import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMultiItemPacksComponent } from './carousel-multi-item-packs.component';

describe('CarouselMultiItemPacksComponent', () => {
  let component: CarouselMultiItemPacksComponent;
  let fixture: ComponentFixture<CarouselMultiItemPacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselMultiItemPacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselMultiItemPacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
