import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../shared/team';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(private http: HttpClient) {}

  getAllTeams(): Observable<Team[]> {
    return this.http.get<Team[]>('http://localhost:8080/teams');
  }

  getTeamById(id: number): Observable<Team> {
    return this.http.get<Team>('http://localhost:8080/teams/' + id);
  }

  addTeam(requestBody: any) {
    return this.http.post('http://localhost:8080/teams', requestBody);
  }

  getCountries(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:8080/enums/country');
  }

  getLeagues(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:8080/enums/league');
  }

  deleteTeam(id: number) {
    return this.http.delete('http://localhost:8080/teams/' + id);
  }

  searchTeams(name: string) {
    return this.http.get<Team[]>('http://localhost:8080/teams?name=' + name);
  }
}