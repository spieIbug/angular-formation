import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html'
})
export class LeftMenuComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

}
