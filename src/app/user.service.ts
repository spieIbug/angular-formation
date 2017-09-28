import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
  constructor() {
    if (!localStorage.getItem('login')) {
      localStorage.setItem('login', 'false');
    }
  }

  isLoggedIn(): boolean {
    console.warn('i should call an identity server');
    return localStorage.getItem('login') === 'true';
  }

  login(): void {
    localStorage.setItem('login', 'true');
  }
  logout(): void {
    localStorage.setItem('login', 'false');
  }
}
