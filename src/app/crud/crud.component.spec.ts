import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudComponent } from './crud.component';
import {BreadCrumbComponent} from '../app-main/bread-crumb/bread-crumb.component';
import {ItemTableListComponent} from '../app-items/item-table-list/item-table-list.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FilterThComponent} from '../table/filter-th/filter-th.component';
import {ItemsListFilterPipe} from '../app-items/items-list-filter.pipe';
import {EditableTdComponent} from '../table/editable-td/editable-td.component';
import {FormsModule} from '@angular/forms';
import {ItemsService} from '../app-items/items.service';

describe('CrudComponent', () => {
  let component: CrudComponent;
  let fixture: ComponentFixture<CrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [ CrudComponent, BreadCrumbComponent, ItemTableListComponent, EditableTdComponent, FilterThComponent, ItemsListFilterPipe ],
      providers: [ItemsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
