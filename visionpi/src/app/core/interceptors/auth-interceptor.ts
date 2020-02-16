import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const session = JSON.parse(localStorage.getItem('session'));
    let code = localStorage.getItem('code');

    let request = req;

    if (session) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ session.accessToken }`,
          'Content-Type': 'application/json'
        }
      });
    } else {
      if (code) {
        request = request.clone({
            setHeaders: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: `Basic ${code}`
            }
        });
      }
    }

    return next.handle(request);
  }
}
