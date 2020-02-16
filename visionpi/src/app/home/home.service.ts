import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, delay, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getInfoUser(user: string) {
    return this.http.get<any>(environment.apiUsers + '/user/' + user)
      .pipe(map(auxUser => {
        console.log("user" + auxUser)
        if(auxUser){
          return auxUser;
        }
    }));
  }

}
