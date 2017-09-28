import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableTdComponent } from './editable-td.component';

describe('EditableTdComponent', () => {
  let component: EditableTdComponent;
  let fixture: ComponentFixture<EditableTdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditableTdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
