import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html'
})
export class BreadCrumbComponent implements OnInit {

  @Input()
  title: string;


  @Input()
  icon: string;
  constructor() { }

  ngOnInit() {
  }

}
