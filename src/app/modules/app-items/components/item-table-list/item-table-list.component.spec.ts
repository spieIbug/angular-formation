import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemTableListComponent} from './item-table-list.component';
import {EditableTdComponent} from '../../../table/components/editable-td/editable-td.component';
import {FilterThComponent} from '../../../table/components/filter-th/filter-th.component';
import {ItemsListFilterPipe} from '../../Pipes/items-list-filter.pipe';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ItemsService} from '../../services/items.service';
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
