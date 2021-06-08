import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMultiItemMtnBooksComponent } from './carousel-multi-item-mtn-books.component';

describe('CarouselMultiItemMtnBooksComponent', () => {
  let component: CarouselMultiItemMtnBooksComponent;
  let fixture: ComponentFixture<CarouselMultiItemMtnBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselMultiItemMtnBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselMultiItemMtnBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
