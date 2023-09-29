import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Player } from '../shared/player';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
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
    let token = "Bearer " + localStorage.getItem('token');
    let headers = {Authorization: token};
    return this.http.get<Player[]>('http://localhost:8080/players', {headers:headers});
  }

  searchPlayersByName(name: string) {
    let token = "Bearer " + localStorage.getItem('token');
    let headers = {Authorization: token};
    return this.http.get<Player[]>(
      'http://localhost:8080/players?name=' + name, {headers:headers}
    );
  }

  searchPlayersByTeam(team: string) {
    let token = "Bearer " + localStorage.getItem('token');
    let headers = {Authorization: token};
    return this.http.get<Player[]>(
      'http://localhost:8080/players?team=' + team, {headers:headers}
    );
  }
}
