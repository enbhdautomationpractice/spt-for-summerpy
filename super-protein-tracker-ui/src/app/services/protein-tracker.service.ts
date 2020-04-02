import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ProteinTracker } from '../models/protein-tracker.model';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProteinTrackerService {

  constructor(private http: HttpClient) { }

  getProteinTrackers(): Observable<ProteinTracker[]>  {
    return this.http.get<ProteinTracker[]>('/server/api/v1/ProteinTrackers')
      .pipe(catchError(this.handleError<ProteinTracker[]>('getProteinTrackers', [])));
  }

  getProteinTracker(id: String): Observable<ProteinTracker> {
    return this.http.get<ProteinTracker>('/server/api/v1/ProteinTrackers/' + id)
      .pipe(catchError(this.handleError<ProteinTracker>('getProteinTracker')));
  }

  createProteinTrackerRegistration(proteinTracker: ProteinTracker): Observable<ProteinTracker> {
    let body = JSON.stringify(proteinTracker);
    return this.http.post<ProteinTracker>('/server/api/v1/ProteinTrackers', body, httpOptions)
      .pipe(catchError(this.handleError<ProteinTracker>('createProteinTrackerRegistration')));
  }

  updateProteinTrackerRegistration(proteinTracker: ProteinTracker): Observable<ProteinTracker> {
    let body = JSON.stringify(proteinTracker);
    return this.http.put<ProteinTracker>('/server/api/v1/ProteinTrackers/' + proteinTracker.id, body, httpOptions)
      .pipe(catchError(this.handleError<ProteinTracker>('updateProteinTrackerRegistration')));
  }

  deleteProteinTrackerRegistration(id: String): Observable<ProteinTracker> {
    return this.http.delete<ProteinTracker>("/server/api/v1/ProteinTrackers/" + id, httpOptions)
      .pipe(catchError(this.handleError<ProteinTracker>('deleteProteinTrackerRegistration')));
  }

  addProtein(id: String, value: number): Observable<ProteinTracker> {
    return this.http.put<ProteinTracker>("/server/api/v1/ProteinTrackers/" + id + "/add/" + value, httpOptions)
      .pipe(catchError(this.handleError<ProteinTracker>('addProtein')));
  }

  removeProtein(id: String, value: number): Observable<ProteinTracker> {
    return this.http.put<ProteinTracker>("/server/api/v1/ProteinTrackers/" + id + "/remove/" + value, httpOptions)
      .pipe(catchError(this.handleError<ProteinTracker>('removeProtein')));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
