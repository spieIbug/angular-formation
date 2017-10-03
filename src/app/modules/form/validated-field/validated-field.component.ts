import {Component, Input, OnInit} from '@angular/core';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-validated-field',
  templateUrl: './validated-field.component.html'
})
export class ValidatedFieldComponent implements OnInit {

  @Input()
  inputRef: NgModel;

  ngOnInit() {
    console.log(this.inputRef);
  }
}
