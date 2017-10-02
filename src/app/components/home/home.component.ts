import {Component, Input, OnInit} from '@angular/core';
import {ScreenComponent} from '../../modules/app-main/screen-component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent extends ScreenComponent implements OnInit {

  @Input()
  title = 'Home';

  @Input()
  subTitle = 'A Welcome home';

  @Input()
  icon = 'fa-dashboard';
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
