import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyFormComponent } from './supply-form.component';

describe('SupplyFormComponent', () => {
  let component: SupplyFormComponent;
  let fixture: ComponentFixture<SupplyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
