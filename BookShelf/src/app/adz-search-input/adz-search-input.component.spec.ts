import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdzSearchInputComponent } from './adz-search-input.component';

describe('AdzSearchInputComponent', () => {
  let component: AdzSearchInputComponent;
  let fixture: ComponentFixture<AdzSearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdzSearchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdzSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
