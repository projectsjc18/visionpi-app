import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, delay, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) { }
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(username: string, password: string) {
      localStorage.setItem('code', this.b64EncodeUnicode(`${username}:${password}`))

      const payload = new HttpParams()
                      .set('grant_type', 'password')
                      .set('username', username)
                      .set('password', password);
      return this.http.post<any>(environment.apiAuthentication, payload.toString())
          .pipe(map(session => {
              // login successful if there's a jwt token in the response
              if (session && session.token.accessToken) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('session', JSON.stringify(session.token));
                  this.isLoggedIn = true;
              }
              return session;
          }));
  }

  logout(): void {
    this.isLoggedIn = false;
    // remove user from local storage to log user out
    localStorage.clear();
  }

  b64EncodeUnicode(str: any) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
      // function toSolidBytes(match, p1) {
      (match, p1) => {
        // console.debug('match: ' + match);
        return String.fromCharCode(("0x" + p1) as any);
    }));
  }


}
