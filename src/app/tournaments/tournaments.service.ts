import { Injectable } from '@angular/core';
import { TournamentI } from './tournament.model';

@Injectable({
  providedIn: 'root',
})
export class TournamentsService {
  private activeTournaments: TournamentI[] = [
    {
      end_date: '23/03/2020',
      id: 1,
      start_date: '18/02/2020',
      title: 'Miami Open',
      imageUrl: `https://www.atptour.com/en/tournaments/australian-open/580/www.atptour.com/
        -/media/images/atp-tournaments/tournament-images/australianopen_tournimage.jpg`,
    },
    {
      end_date: '12/04/2020',
      id: 2,
      start_date: '23/03/2020',
      title: 'ATP Finals',
      imageUrl:
        'https://media.vanityfair.com/photos/569d46e2bfe916b0048cbe3e/16:9/w_1280,c_limit/tennis-fixing-australian-open.jpg',
    },
  ];

  private upComingTournaments: TournamentI[] = [
    {
      end_date: '14/06/2020',
      id: 3,
      start_date: '18/04/2020',
      title: 'Rolan Garos',
      imageUrl: `https://media.gq-magazine.co.uk/photos/5d1ba12c082223c35cd42e47/master/pass/original`,
    },
    {
      end_date: '12/09/2020',
      id: 4,
      start_date: '23/10/2020',
      title: 'Australian Open',
      imageUrl:
        'https://media.self.com/photos/5b7c29cf3327c070925be489/16:9/w_1280,h_720,c_limit/us-open.jpg',
    },
  ];

  constructor() {}

  getActiveTournaments(): TournamentI[] {
    return [...this.activeTournaments];
  }

  getAllTournaments(): TournamentI[] {
    return [...this.activeTournaments, ...this.upComingTournaments];
  }

  getTournamentById(tournamentId: string): TournamentI {
    return {
      ...this.getAllTournaments().find(tournament => {
        return tournament.id.toString() === tournamentId;
      }),
    };
  }

  getUpComingTournaments(): TournamentI[] {
    return [...this.upComingTournaments];
  }
}
