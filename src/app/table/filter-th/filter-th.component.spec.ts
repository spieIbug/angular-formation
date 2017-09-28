import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterThComponent } from './filter-th.component';

describe('FilterThComponent', () => {
  let component: FilterThComponent;
  let fixture: ComponentFixture<FilterThComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterThComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterThComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
