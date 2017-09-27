import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html'
})
export class CrudComponent implements OnInit {

  @Input()
  title = 'CRUD';

  @Input()
  subTitle = 'A Crud basic vue';
  constructor() { }

  @Input()
  icon = 'fa-table';
  ngOnInit() {
  }

}
