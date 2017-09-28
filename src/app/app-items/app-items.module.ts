import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ItemComponent} from './item/item.component';
import {FormsModule} from '@angular/forms';
import {ItemsService} from './items.service';
import {RouterModule} from '@angular/router';
import { ItemTableListComponent } from './item-table-list/item-table-list.component';
import { ItemsListFilterPipe } from './items-list-filter.pipe';
import {TableModule} from '../table/table.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    TableModule
  ],
  declarations: [
    ItemComponent,
    ItemTableListComponent,
    ItemsListFilterPipe
  ],
  providers : [ItemsService],
  exports : [ItemComponent, ItemTableListComponent]
})
export class AppItemsModule { }
