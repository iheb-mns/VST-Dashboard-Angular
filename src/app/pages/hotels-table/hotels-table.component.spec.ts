import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsTableComponent } from './hotels-table.component';

describe('HotelsTableComponent', () => {
  let component: HotelsTableComponent;
  let fixture: ComponentFixture<HotelsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
