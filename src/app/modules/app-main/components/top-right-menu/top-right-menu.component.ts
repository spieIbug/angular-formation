import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../../services/user.service';

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
    this.userService.logout()
      .subscribe(() => {
        console.warn('the server should log me out');
        this.router.navigate(["login"]);
      });
  }
}
