import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Player } from '../shared/player';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  // players$: Observable<Player[]>;
  // error$: Observable<unknown>;

  // private playerSubject = new Subject<Player[]>();
  // private errorSubject = new Subject<unknown>();

  constructor(private http: HttpClient) {
    // this.players$ = this.playerSubject.asObservable();
    // this.error$ = this.errorSubject.asObservable();
  }

  getPlayers() {
    return this.http.get('http://localhost:8080/players');
  }
}
