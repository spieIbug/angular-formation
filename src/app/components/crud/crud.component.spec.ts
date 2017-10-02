import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudComponent } from './crud.component';
import {BreadCrumbComponent} from '../../modules/app-main/components/bread-crumb/bread-crumb.component';
import {ItemTableListComponent} from '../../modules/app-items/components/item-table-list/item-table-list.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FilterThComponent} from '../../modules/table/components/filter-th/filter-th.component';
import {ItemsListFilterPipe} from '../../modules/app-items/Pipes/items-list-filter.pipe';
import {EditableTdComponent} from '../../modules/table/components/editable-td/editable-td.component';
import {FormsModule} from '@angular/forms';
import {ItemsService} from '../../modules/app-items/services/items.service';

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
