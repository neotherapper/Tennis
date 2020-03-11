import { Component, OnInit } from '@angular/core';
import { TournamentI } from './tournament.model';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.page.html',
  styleUrls: ['./tournaments.page.scss'],
})
export class TournamentsPage implements OnInit {
  tournaments: TournamentI[] = [
    {
      end_date: '23/03/2020',
      id: 1,
      start_date: '18/02/2020',
      title: 'First Tournament',
      imageUrl:
        'https://cdn1.tahoedonner.com/wp-content/uploads/2018/05/11193919/TennisHeader10.jpg',
    },
    {
      end_date: '12/05/2020',
      id: 2,
      start_date: '23/03/2020',
      title: 'Second Tournament',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1AY-pRkhCeNHEs8UpClYBOlMcF9-igLQaFNfD3_vAyonjyC08',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
