import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Match } from '../shared/match';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class MatchesService {
  constructor(private http: HttpClient) {}

  getAllMatches(): Observable<Match[]> {
    return this.http.get<Match[]>('http://localhost:8080/matches');
  }

  getMatchById(id: number): Observable<Match> {
    return this.http.get<Match>('http://localhost:8080/matches/' + id);
  }

  getMatchByAwayName(name: string): Observable<Match[]>{
    return this.http.get<Match[]>('http://localhost:8080/matches?awayTeam=' + name)
  }
  getMatchByHomeName(name: string): Observable<Match[]>{
    return this.http.get<Match[]>('http://localhost:8080/matches?homeTeam=' + name)
  }

  addMatch(requestBody: any) {
    return this.http.post('http://localhost:8080/matches', requestBody);
  }


  deleteMatch(id: number) {
    return this.http.delete('http://localhost:8080/matches/' + id);
  }
}