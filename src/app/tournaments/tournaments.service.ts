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
      imageUrl: `https://image-cdn.essentiallysports.com/wp-content/uploads/20200310035314/D5A_0213.jpg`,
    },
    {
      end_date: '12/04/2020',
      id: 2,
      start_date: '23/03/2020',
      title: 'Rolan Garros',
      imageUrl:
        'https://www.perfect-tennis.com/wp-content/uploads/2019/05/Federer-FO-2019-1st-R.jpg',
    },
    {
      end_date: '17/04/2020',
      id: 3,
      start_date: '19/03/2020',
      title: 'Swiss Open',
      imageUrl:
        'https://www.datocms-assets.com/7883/1554249230-ch2018swissopengstaad.jpg?fit=crop&fm=jpg&w=1920',
    },
    {
      end_date: '22/03/2020',
      id: 4,
      start_date: '23/02/2020',
      title: 'Wimbledon',
      imageUrl:
        'https://www.wimbledon.com//images/pics/large/b_swilliams_523_190702_jt.jpg',
    },
  ];

  private upComingTournaments: TournamentI[] = [
    {
      end_date: '14/06/2020',
      id: 101,
      start_date: '18/04/2020',
      title: 'French Open',
      imageUrl: `https://d2gd8qsu8uml9u.cloudfront.net/uploads/GettyImages-148180590.jpg`,
    },
    {
      end_date: '12/07/2020',
      id: 102,
      start_date: '23/06/2020',
      title: 'Wimbledon',
      imageUrl:
        'https://mysportstourist.com/wp-content/uploads/2018/09/Wimbledon.jpg',
    },
    {
      end_date: '12/07/2020',
      id: 103,
      start_date: '23/06/2020',
      title: 'USA Finals',
      imageUrl: `https://nationalexecutivetransfers.co.uk/wp-content/uploads/2019/08/evn3.jpg`,
    },
    {
      end_date: '04/08/2020',
      id: 104,
      start_date: '14/07/2020',
      title: 'Athens Finals',
      imageUrl: `https://www.tennisworldusa.org/world/media/mega/image79360.jpg`,
    },
    {
      end_date: '21/08/2020',
      id: 105,
      start_date: '11/08/2020',
      title: 'Abu Dhabi Open',
      imageUrl: `https://www.timeoutabudhabi.com/public/images/2018/11/05/MWTC_Novak_1_1.jpg`,
    },
    {
      end_date: '08/09/2020',
      id: 105,
      start_date: '23/08/2020',
      title: 'Madrid Open',
      imageUrl: `https://playrface.co.uk/wp-content/uploads/2020/02/nadal-madrid-open-scaled.jpg`,
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
