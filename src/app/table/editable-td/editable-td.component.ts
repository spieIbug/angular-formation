import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-editable-td',
  templateUrl: './editable-td.component.html'
})
export class EditableTdComponent implements OnInit {
  /**
   * inputField must be provided in order to emit changed value to the parent component object
   **/
  @Input()
  inputField: any;

  originalvalue: any;

  /**
   * A simple title for display
   **/
  @Input()
  title: string;

  /**
   * Whenever the user change the field filterChanged event is emitted to the parent component
   * @type {EventEmitter<string>}
   */
  @Output()
  inputChanged = new EventEmitter<string>();

  inputDisplay: boolean;

  constructor() {
  }

  ngOnInit() {
    this.originalvalue = this.inputField;
  }

  displayInput($event: MouseEvent) {
    this.inputDisplay = true;
  }

  hideinput() {
    this.inputDisplay = false;
  }

  /**
   * Emit event when input
   **/
  dirty(): void {
    console.warn('update in progress');
  }

  cancelUpdate() {
    this.inputField = this.originalvalue;
    this.hideinput();
  }

  performUpdate() {
    this.inputChanged.emit(this.inputField);
    this.hideinput();
  }
}
