import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkersRefillsComponent } from './markers-refills.component';

describe('MarkersRefillsComponent', () => {
  let component: MarkersRefillsComponent;
  let fixture: ComponentFixture<MarkersRefillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkersRefillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkersRefillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
