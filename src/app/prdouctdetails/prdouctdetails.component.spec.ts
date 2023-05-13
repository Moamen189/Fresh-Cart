import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdouctdetailsComponent } from './prdouctdetails.component';

describe('PrdouctdetailsComponent', () => {
  let component: PrdouctdetailsComponent;
  let fixture: ComponentFixture<PrdouctdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrdouctdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrdouctdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
