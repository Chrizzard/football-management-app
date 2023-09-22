import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../shared/team';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(private http: HttpClient) {}

  getTeamById(id: number): Observable<Team> {
    return this.http.get<Team>('http://localhost:8080/teams/' + id);
  }
}