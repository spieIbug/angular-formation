import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BreadCrumbComponent} from './bread-crumb.component';

describe('BreadCrumbComponent', () => {
  let component: BreadCrumbComponent;
  let fixture: ComponentFixture<BreadCrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BreadCrumbComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadCrumbComponent);
    component = fixture.componentInstance;
    component.icon = 'fa-dashboard';
    fixture.detectChanges();
  });

  it(`should have as icon 'fa-dashboard'`, async(() => {
    const currentComponent = fixture.debugElement.componentInstance;
    expect(currentComponent.icon).toEqual('fa-dashboard');
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
