import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import {JwtHelper} from 'angular2-jwt';

@Injectable()
export class UserService {
  private token: string;

  /**
   *
   * HEADER:ALGORITHM & ADMIN_TOKEN TYPE
   * {
   *   "alg": "HS256",
   *   "typ": "JWT"
   * }
   * PAYLOAD:DATA
   * {
   *  "token": "1234567890",
   *  "roles": ["user", "admin"]
   * }
   * VERIFY SIGNATURE
   * HMACSHA256(
   *    base64UrlEncode(header) + "." +
   *    base64UrlEncode(payload),
   *    cle_secrete
   * )
   * @type {string}
   */
  private ADMIN_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjEyMzQ1Njc4OTAiLCJyb2xlcyI6WyJ1c2VyIiwiYWRtaW4iXX0.bqG__9ft43dK1cx8JtOTINQOdq8lYLFI1CtTEPeDbAk';
  private USER_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjEyMzQ1Njc4OTAiLCJyb2xlcyI6WyJ1c2VyIl19.L6W8xni9uXsBZjkAB9u34QjJ7m082wp2DwJys-pOsVA';
  jwtHelper: JwtHelper = new JwtHelper();

  constructor() {
    this.token = localStorage.getItem('token');
    if (!!this.token) {
      this.isLoggedIn();
    }
  }

  isLoggedIn(): boolean {
    console.warn('i should call an identity server with this token : ' + this.token);
    const token = localStorage.getItem('token');
    return token ? token === this.USER_TOKEN || token === this.ADMIN_TOKEN : false;
  }

  login(): Observable<boolean> {
    localStorage.setItem('token', this.USER_TOKEN);
    this.token = this.USER_TOKEN;
    return Observable.of(true).delay(1000);
  }

  logout(): Observable<boolean> {
    localStorage.removeItem('token');
    this.token = null;
    return Observable.of(false).delay(1000);
  }

  hasRole(role: string): boolean {
    console.warn('checking role : ' + role);
    const decodeToken = this.jwtHelper.decodeToken(this.token);
    for (let i = 0; i < decodeToken['roles'].length; i++) {
      if (decodeToken['roles'][i] === role) {
        console.warn('Found role : ' + role);
        return true;
      }
    }
    console.error('insufficient privilege : ' + role);
    return false;
  }

  adminLogin(): Observable<boolean> {
    localStorage.setItem('token', this.ADMIN_TOKEN);
    this.token = this.ADMIN_TOKEN;
    return Observable.of(true).delay(1000);
  }
}
