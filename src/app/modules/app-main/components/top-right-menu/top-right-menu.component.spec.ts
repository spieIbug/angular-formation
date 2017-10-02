import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TopRightMenuComponent} from './top-right-menu.component';
import {RouterTestingModule} from '@angular/router/testing';
import {UserService} from '../../../../services/user.service';

describe('TopRightMenuComponent', () => {
  let component: TopRightMenuComponent;
  let fixture: ComponentFixture<TopRightMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [TopRightMenuComponent],
      providers: [UserService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRightMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
