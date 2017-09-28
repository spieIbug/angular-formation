import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  isLoggedIn(): boolean {
    console.warn('i should call an identity server');
    return confirm('a simple yes login \n :)');
  }
}
