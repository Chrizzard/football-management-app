import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../shared/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService {

  constructor(private http: HttpClient) { }

  getPlayerById(id: number): Observable<Player>{
    return this.http.get<Player>('http://localhost:8080/players/' + id);
  }
}
