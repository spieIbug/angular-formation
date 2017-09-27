import {Component, OnInit} from '@angular/core';
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
    id : null,
    title : '',
    description : ''
  };

  constructor(private itemsService: ItemsService) {
    this.items = itemsService.findAll();
  }

  ngOnInit() {

  }

  switchStyle(event: MouseEvent) {
    event.target.style.border = event.type === 'mouseover' ? '2px dashed #f2d2d2' : null;
  }

  displayFilter($event: MouseEvent) {
    this.titleFilterDisplay = true;
    this.descriptionFilterDisplay = true;
    console.log('click');
  }
}
