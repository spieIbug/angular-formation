import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemTableListComponent} from './item-table-list.component';
import {EditableTdComponent} from '../../table/editable-td/editable-td.component';
import {FilterThComponent} from '../../table/filter-th/filter-th.component';
import {ItemsListFilterPipe} from '../items-list-filter.pipe';
import {Route, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ItemsService} from '../items.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('ItemTableListComponent', () => {
  let component: ItemTableListComponent;
  let fixture: ComponentFixture<ItemTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, FormsModule, RouterTestingModule],
      declarations: [ItemTableListComponent, EditableTdComponent, FilterThComponent, ItemsListFilterPipe],
      providers : [ItemsService]
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
