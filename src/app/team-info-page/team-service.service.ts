import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../shared/team';


@Injectable({
  providedIn: 'root',
})
export class TeamServiceService {
  constructor(private http: HttpClient) {}

  getHeroById(id: number) {
    return this.http.get<Team>('localhost:8080/teams/' + id);
  }
}
