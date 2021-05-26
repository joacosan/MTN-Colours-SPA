import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCarouselMainComponent } from './app-carousel-main.component';

describe('AppCarouselMainComponent', () => {
  let component: AppCarouselMainComponent;
  let fixture: ComponentFixture<AppCarouselMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCarouselMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCarouselMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
