import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorductAddComponent } from './porduct-add.component';

describe('PorductAddComponent', () => {
  let component: PorductAddComponent;
  let fixture: ComponentFixture<PorductAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorductAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
