import {Component, OnInit} from '@angular/core';
import {UserService} from '../../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-right-menu',
  templateUrl: './top-right-menu.component.html'
})
export class TopRightMenuComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(["login"]);
  }
}
