import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdzBookPopUpComponent } from './adz-book-pop-up.component';

describe('AdzBookPopUpComponent', () => {
  let component: AdzBookPopUpComponent;
  let fixture: ComponentFixture<AdzBookPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdzBookPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdzBookPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
