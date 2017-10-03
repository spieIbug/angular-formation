import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PopoverModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import {ValidatedFieldComponent} from './validated-field/validated-field.component';

@NgModule({
  imports: [
    CommonModule,
    PopoverModule.forRoot(),
    FormsModule
  ],
  declarations: [ValidatedFieldComponent],
  exports: [ValidatedFieldComponent]
})
export class FormModule {
}
