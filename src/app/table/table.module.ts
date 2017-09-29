import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import { EditableTdComponent } from './editable-td/editable-td.component';
import { FilterThComponent } from './filter-th/filter-th.component';
/**
 * @whatItDoes
 * This is a generic module that handles editable Cells, and filtrable Headers
 * @howToUse
 * ```
 * @NgModule({
 *  imports: [
 *    TableModule
 *  ]
 * })
 * export class YourModule { }
 * ```
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [EditableTdComponent, FilterThComponent],
  exports : [EditableTdComponent, FilterThComponent]
})
export class TableModule { }
