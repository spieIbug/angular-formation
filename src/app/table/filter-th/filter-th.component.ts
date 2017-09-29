import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
/**
 * @whatItDoes
 * This is an filter header component.
 * Double click : it display a filter (text input).
 * Escape : it displays the given title
 * @howToUse
 * ```
 * <th>
 *  <app-filter-th [filterField]="yourFilterObject.yourAttribute" title="A SIMPLE TITLE TO DISPLAY"  (filterChanged)="yourHandler($event, 'yourAttribute')"></app-filter-td>
 * </th>
 *
 * <tr *ngFor="let item of items | yourPipeFilter:yourFilterObject">
 *     <td>{{item.yourAttribute}}</td>
 * </tr>
 * ```
 */
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
