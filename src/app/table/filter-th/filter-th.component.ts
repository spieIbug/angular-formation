import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter-th',
  templateUrl: './filter-th.component.html'
})
export class FilterThComponent implements OnInit {

  /**
   * filterField must be provided in order to emit changed value to the parent component filter object
   **/
  @Input()
  filterField: any;

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
  filterChanged = new EventEmitter<string>();

  filterDisplay: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  displayFilter($event: MouseEvent) {
    this.filterDisplay = true;
  }

  hideFilter() {
    this.filterDisplay = false;
  }

  /**
   * Emit event when input
   **/
  dirty(): void {
    this.filterChanged.emit(this.filterField);
  }
}
