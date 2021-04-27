import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { subscribeOn, tap } from 'rxjs/operators';

const BASE_API_URL = 'https://api.publicapis.org';


@Injectable({
  providedIn: 'root'
})
export class PublicApisService {

  private _entriesList = new BehaviorSubject<Array<any>>(null);

  get entries(): Observable<Array<any>> {
    return this._entriesList.asObservable();
  }

  constructor(
    private http: HttpClient
  ) { }

  getEntries(title = ''): void {
    let params = new HttpParams({ 
      fromObject: {
        title
      }
    });
    this.http.get(`${BASE_API_URL}/entries`, {params}).pipe(
      tap((res: any) => {
        this._entriesList.next(res.entries);
      })
    ).subscribe();
  }

}

