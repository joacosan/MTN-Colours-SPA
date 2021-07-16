import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToHomeAndShareComponent } from './back-to-home-and-share.component';

describe('BackToHomeAndShareComponent', () => {
  let component: BackToHomeAndShareComponent;
  let fixture: ComponentFixture<BackToHomeAndShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackToHomeAndShareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackToHomeAndShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
