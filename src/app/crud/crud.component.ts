import {Component, Input, OnInit} from '@angular/core';
import {ItemsService} from '../app-items/items.service';
import {Item} from '../app-items/item';

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

  constructor() {}

  ngOnInit() {
  }

}
