import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Item} from '../item';
import {ItemsService} from '../items.service';

@Component({
  selector: 'app-item-table-list',
  templateUrl: './item-table-list.component.html'
})
export class ItemTableListComponent implements OnInit {
  private items: Item[];
  private titleFilterDisplay: boolean;
  private descriptionFilterDisplay: boolean;
  private filtre: Item = {
    id: null,
    title: '',
    description: ''
  };

  constructor(private itemsService: ItemsService) {
    this.items = itemsService.findAll();
  }

  ngOnInit() {

  }

  displayFilter($event: MouseEvent) {
    // to specific! if you want to develop a generic component, make sure to set Id from keys in the JSON Object
    $event.toElement.id === 'descriptionHead' ? this.descriptionFilterDisplay = true : this.titleFilterDisplay = true;
  }

  remove(item: Item): void {
    this.itemsService.remove(item.id);
  }

  hideFilter() {
    this.titleFilterDisplay = false;
    this.descriptionFilterDisplay = false;
    this.filtre = <Item>{};
  }

  updateFilter(filterField: any, key: string) {
    this.filtre[key] = filterField;
  }

  updateField(inputField: any, item: Item, key: String) {
    item[key] = inputField;
    this.itemsService.save(item);
  }
}


