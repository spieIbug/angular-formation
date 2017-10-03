import {NgModule} from '@angular/core';
import {ItemComponent} from './components/item/item.component';
import {FormsModule} from '@angular/forms';
import {ItemsService} from './services/items.service';
import {RouterModule} from '@angular/router';
import {ItemTableListComponent} from './components/item-table-list/item-table-list.component';
import {ItemsListFilterPipe} from './Pipes/items-list-filter.pipe';
import {CommonModule} from '@angular/common';

import {TableModule} from '../table/table.module';
import {FormModule} from '../form/form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TableModule,
    FormModule
  ],
  declarations: [
    ItemComponent,
    ItemTableListComponent,
    ItemsListFilterPipe
  ],
  providers: [ItemsService],
  exports: [ItemComponent, ItemTableListComponent]
})
export class AppItemsModule {
}
