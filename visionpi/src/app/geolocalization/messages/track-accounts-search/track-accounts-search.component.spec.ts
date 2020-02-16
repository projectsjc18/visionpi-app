import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackAccountsSearchComponent } from './track-accounts-search.component';

describe('TrackAccountsSearchComponent', () => {
  let component: TrackAccountsSearchComponent;
  let fixture: ComponentFixture<TrackAccountsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackAccountsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackAccountsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
