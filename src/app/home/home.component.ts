import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  @Input()
  title = 'Home';

  @Input()
  subTitle = 'A Welcome home';

  @Input()
  icon = 'fa-dashboard';
  constructor() { }

  ngOnInit() {
  }

}
