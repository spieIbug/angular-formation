import {Component, OnInit} from '@angular/core';
import {Item} from '../item';
import {ItemsService} from '../items.service';

@Component({
  selector: 'app-item-table-list',
  templateUrl: './item-table-list.component.html'
})
export class ItemTableListComponent implements OnInit {
  private items: Item[];

  constructor(private itemsService: ItemsService) {
    this.items = itemsService.findAll();
  }

  ngOnInit() {

  }

}
