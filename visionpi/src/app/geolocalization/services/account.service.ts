import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
//import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { Checkpoint } from '../models/checkpoint';
import { Account } from '../models/account';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccounts() {
      return this.http.get<Account[]>(environment.apiGeolocalization + "/accounts");
  }

  getAccountsDetails() {
      return this.http.get<Account[]>(environment.apiGeolocalization + "/accounts/details");
  }

  getAccountsByUserAccount(userAccount: Account) {
      return this.http.get<Account[]>(environment.apiUsers + "/account/" + userAccount);
  }

  registerAccount(account: Account) {
      return this.http.post(environment.apiGeolocalization + "/accounts", account);
  }

}
