import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Item} from '../../model/item';
import {ItemsService} from '../../services/items.service';

@Component({
  selector: 'app-item-table-list',
  templateUrl: './item-table-list.component.html'
})
export class ItemTableListComponent implements OnInit {
  private items: Item[];
  private filtre: Item = {
    id: null,
    title: '',
    description: ''
  };

  constructor(private itemsService: ItemsService) {}

  ngOnInit() {
    this.items = this.itemsService.findAll();
  }

  remove(item: Item): void {
    this.itemsService.remove(item.id);
  }

  updateFilter(filterField: string, key: string): void {
    this.filtre[key] = filterField;
  }

  updateField(inputField: string, item: Item, key: string): void {
    item[key] = inputField;
    this.itemsService.save(item);
  }
}


