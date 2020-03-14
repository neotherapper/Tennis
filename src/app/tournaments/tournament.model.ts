export interface TournamentI {
  end_date: string;
  id: number;
  start_date: string;
  title: string;
  imageUrl?: string;
}

export interface TournamentBracketI {
  title: string;
  rounds: TournamentRoundI[];
}

export interface TournamentRoundI {
  title: string;
  games: TournamentGameI[];
}

export interface TournamentGameI {
  match_date: string;
  home_team: TournamentGameTeamI;
  away_team: TournamentGameTeamI;
}

export interface TournamentGameTeamI {
  isWinner: boolean;
  medal?: string;
  player_name: string;
  score: number;
}

export interface PlayerI {
  name: string;
}
