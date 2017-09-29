import {Component, Input, OnInit} from '@angular/core';
import {ScreenComponent} from '../app-main/screen-component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html'
})
export class CrudComponent extends ScreenComponent implements OnInit {

  @Input()
  title = 'CRUD';

  @Input()
  subTitle = 'A Crud basic vue';

  @Input()
  icon = 'fa-table';

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
