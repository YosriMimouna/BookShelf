import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdzBookFilteringComponent } from './adz-book-filtering.component';

describe('AdzBookFilteringComponent', () => {
  let component: AdzBookFilteringComponent;
  let fixture: ComponentFixture<AdzBookFilteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdzBookFilteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdzBookFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
