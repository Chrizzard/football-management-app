import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../shared/team';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';


@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(private http: HttpClient) {}

  getAllTeams(): Observable<Team[]> {
    const token = "Bearer " + localStorage.getItem('token');
    const headers = {Authorization: token}
    return this.http.get<Team[]>('http://localhost:8080/teams' , {headers:headers});
  }

  getTeamById(id: number): Observable<Team> {
    let token = "Bearer " + localStorage.getItem('token');
    let headers = {Authorization: token};
    return this.http.get<Team>('http://localhost:8080/teams/' + id, {headers:headers});
  }

  addTeam(requestBody: any) {
    let token = "Bearer " + localStorage.getItem('token');
    let headers = {Authorization: token};
    return this.http.post('http://localhost:8080/teams', requestBody, {headers:headers});
  }

  getCountries(): Observable<string[]> {
    let token = "Bearer " + localStorage.getItem('token');
    let headers = {Authorization: token};
    return this.http.get<string[]>('http://localhost:8080/enums/country', {headers:headers});
  }

  getLeagues(): Observable<string[]> {
    let token = "Bearer " + localStorage.getItem('token');
    let headers = {Authorization: token};
    return this.http.get<string[]>('http://localhost:8080/enums/league', {headers:headers});
  }

  deleteTeam(id: number) {
    let token = "Bearer " + localStorage.getItem('token');
    let headers = {Authorization: token};
    return this.http.delete('http://localhost:8080/teams/' + id, {headers:headers});
  }

  searchTeamsByName(name: string) {
    let token = "Bearer " + localStorage.getItem('token');
    let headers = {Authorization: token};
    return this.http.get<Team[]>('http://localhost:8080/teams?name=' + name, {headers:headers});
  }

  searchTeamsByCountry(country: string) {
    let token = "Bearer " + localStorage.getItem('token');
    let headers = {Authorization: token};
    return this.http.get<Team[]>('http://localhost:8080/teams?country=' + country);
  }
}