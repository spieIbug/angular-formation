import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedFieldComponent } from './validated-field.component';
import {PopoverModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';

describe('ValidatedFieldComponent', () => {
  let component: ValidatedFieldComponent;
  let fixture: ComponentFixture<ValidatedFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, PopoverModule],
      declarations: [ ValidatedFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatedFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
