import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ITextComponent } from './i-text.component';

describe('ITextComponent', () => {
  let component: ITextComponent;
  let fixture: ComponentFixture<ITextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
