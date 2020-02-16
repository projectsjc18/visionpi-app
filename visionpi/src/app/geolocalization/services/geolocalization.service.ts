import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
//import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { Checkpoint } from '../models/checkpoint';
import { Route } from '../models/route';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeolocalizationService {
  //private handleError: HandleError;

  constructor(private http: HttpClient /*, httpErrorHandler: HttpErrorHandler*/) {
  	//this.handleError = httpErrorHandler.createHandleError('GpxService');
  }

  getAllRoutes(): Observable<Route[]> {
    return this.http.get<Route[]>(environment.apiGeolocalization + '/checkpoints');
  }

  getAllCheckpoints(): Observable<Checkpoint[]> {
    return this.http.get<Checkpoint[]>(environment.apiGeolocalization + '/checkpoints');
  }

  getCheckpointsByRoute(route): Observable<Route[]> {
    return this.http.get<Route[]>(environment.apiGeolocalization + '/checkpoints/' + route);
  }
}
