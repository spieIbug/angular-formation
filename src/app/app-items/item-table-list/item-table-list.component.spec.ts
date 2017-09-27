import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTableListComponent } from './item-table-list.component';

describe('ItemTableListComponent', () => {
  let component: ItemTableListComponent;
  let fixture: ComponentFixture<ItemTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
