import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { EditableTdComponent } from './editable-td/editable-td.component';
import { FilterThComponent } from './filter-th/filter-th.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [EditableTdComponent, FilterThComponent],
  exports : [EditableTdComponent, FilterThComponent]
})
export class TableModule { }
