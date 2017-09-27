import {Component, Input, OnInit} from '@angular/core';
import {ItemsService} from '../items.service';
import {Item} from '../item';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html'
})
export class CrudComponent implements OnInit {

  @Input()
  title = 'CRUD';

  @Input()
  subTitle = 'A Crud basic vue';

  @Input()
  icon = 'fa-table';

  private items: Item[];

  constructor(private itemsService: ItemsService) {
    this.items = itemsService.findAll();
  }

  ngOnInit() {
  }

}
