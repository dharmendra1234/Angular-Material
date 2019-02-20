


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap,delay } from 'rxjs/operators';
import { Feeds } from './Feeds'
import { Users } from './users';
import { Feed } from './feed';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ItuneAppleService {

  private heroesUrl = 'api/v1/us/apple-music/coming-soon/all/100/explicit.json';  // URL to web api

  feeds : Observable<Feed>;
  constructor(
    private http: HttpClient) { }

    getFeeds (): Observable<Feeds> {
      return this.http.get<Feeds>('/api/');
   }
   

   /** can't bypass proxy for stackblitz so get the data from json */
    getFeedFromJson(): Observable<Feeds> {
     return this.http.get<Feeds>('http://localhost:4200/assets/data/feed.json');
    }

    
  getDelayedValueObservable() {
    console.log('testst');
  return of('delayed value').pipe(delay(9000000000000000));
}
}