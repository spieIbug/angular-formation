import { Component, OnInit } from '@angular/core';
import {ScreenComponent} from '../../app-main/screen-component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent extends ScreenComponent implements OnInit {

  title = 'Admin';
  subTitle = 'Administration module';
  icon = 'fa-cogs';

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
