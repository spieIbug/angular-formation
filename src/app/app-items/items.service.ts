import {Injectable} from '@angular/core';
import {Item} from './item';

@Injectable()
export class ItemsService {
  private items: Item[];

  constructor() {
    this.items = [
      {id: 1, title: 'A\'m the first item', description: 'desc1'},
      {id: 2, title: 'A\'m the 2nd item', description: 'desc2'},
      {id: 3, title: 'A\'m the 3rd item', description: 'desc3'},
      {id: 4, title: 'A\'m the 4th item', description: 'desc4'},
      {id: 5, title: 'A\'m the 5th item', description: 'desc5'},
      {id: 6, title: 'A\'m the 6th item', description: 'desc6'},
      {id: 7, title: 'A\'m the 7th item', description: 'desc7'},
      {id: 8, title: 'A\'m the 8th item', description: 'desc8'}
    ];
  }

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: number): Item {
    for (const item of this.items) {
      if (item.id == id) {
        return <Item> item;
      }
    }
    return null;
  }

  save(item: Item): void {
    let existringItem = this.findOne(item.id);
    if (existringItem != null) {
      existringItem = item;
      return;
    }
    this.items.push(item);
  }


}
