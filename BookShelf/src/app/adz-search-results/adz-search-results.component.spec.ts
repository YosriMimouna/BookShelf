import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdzSearchResultsComponent } from './adz-search-results.component';

describe('AdzSearchResultsComponent', () => {
  let component: AdzSearchResultsComponent;
  let fixture: ComponentFixture<AdzSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdzSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdzSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
