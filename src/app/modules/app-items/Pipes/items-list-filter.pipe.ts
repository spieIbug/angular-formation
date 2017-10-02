import {Pipe, PipeTransform} from '@angular/core';
import {Item} from '../model/item';

@Pipe({
  name: 'itemsListFilter',
  pure: false
})
export class ItemsListFilterPipe implements PipeTransform {

  transform(items: Item[], filter: Item): Item[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Item) => this.applyFilter(item, filter));
  }

  /**
   * Perform the filtering.
   *
   * @param {item} item The item to compare to the filter.
   * @param {item} filter The filter to apply.
   * @return {boolean} True if item satisfies filters, false if not.
   */
  private applyFilter(item: Item, filter: Item): boolean {
    for (const field in filter) {
      if (filter[field] && item[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
        return false;
      }
    }
    return true;
  }
}
