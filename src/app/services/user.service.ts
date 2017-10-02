import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class UserService {
  private token: string;

  /**
   *
   * HEADER:ALGORITHM & TOKEN TYPE
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
  private TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjEyMzQ1Njc4OTAiLCJyb2xlcyI6WyJ1c2VyIiwiYWRtaW4iXX0.bqG__9ft43dK1cx8JtOTINQOdq8lYLFI1CtTEPeDbAk';


  constructor() {
    this.token = localStorage.getItem('token');
    if (!!this.token) {
      this.isLoggedIn();
    }
  }

  isLoggedIn(): boolean {
    console.warn('i should call an identity server with this token : ' + this.token);
    const token = localStorage.getItem('token');
    return !(!token || token !== this.TOKEN);


  }

  login(): Observable<boolean> {
    localStorage.setItem('token', this.TOKEN);
    this.token = this.TOKEN;
    return Observable.of(true).delay(1000);
  }

  logout(): Observable<boolean> {
    localStorage.removeItem('token');
    this.token = null;
    return Observable.of(false).delay(1000);
  }
}
