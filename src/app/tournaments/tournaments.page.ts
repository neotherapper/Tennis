import { Component, OnInit } from '@angular/core';
import { TournamentI } from './tournament.model';
import { TournamentsService } from './tournaments.service';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.page.html',
  styleUrls: ['./tournaments.page.scss'],
})
export class TournamentsPage implements OnInit {
  tournaments: TournamentI[];

  constructor(private tournamentsService: TournamentsService) {}

  ngOnInit() {
    this.tournaments = this.tournamentsService.getAllTournaments();
  }
}
