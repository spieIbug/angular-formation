import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  isLoggedIn(): boolean {
    return confirm('a simple yes login \n :)');
  }
}
