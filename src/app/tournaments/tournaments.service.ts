import { Injectable } from '@angular/core';
import { TournamentI } from './tournament.model';

@Injectable({
  providedIn: 'root',
})
export class TournamentsService {
  private tournaments: TournamentI[] = [
    {
      end_date: '23/03/2020',
      id: 1,
      start_date: '18/02/2020',
      title: 'First Tournament',
      imageUrl:
        `https://www.atptour.com/en/tournaments/australian-open/580/www.atptour.com/
        -/media/images/atp-tournaments/tournament-images/australianopen_tournimage.jpg`,
    },
    {
      end_date: '12/05/2020',
      id: 2,
      start_date: '23/03/2020',
      title: 'Second Tournament',
      imageUrl:
        'https://media.vanityfair.com/photos/569d46e2bfe916b0048cbe3e/16:9/w_1280,c_limit/tennis-fixing-australian-open.jpg',
    },
  ];

  constructor() {}

  getAllTournaments(): TournamentI[] {
    return [...this.tournaments];
  }

  getTournamentById(tournamentId: string): TournamentI {
    return {
      ...this.tournaments.find(tournament => {
        return tournament.id.toString() === tournamentId;
      }),
    };
  }
}
