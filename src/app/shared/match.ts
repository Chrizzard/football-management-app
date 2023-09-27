import { Team } from './team';

export interface Match {
  id: number;
  startTime: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
}
