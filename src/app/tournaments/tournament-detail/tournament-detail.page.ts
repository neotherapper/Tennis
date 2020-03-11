import { Component, OnInit } from '@angular/core';
import { TournamentI } from '../tournament.model';
import { ActivatedRoute } from '@angular/router';
import { TournamentsService } from '../tournaments.service';

@Component({
  selector: 'app-tournament-detail',
  templateUrl: './tournament-detail.page.html',
  styleUrls: ['./tournament-detail.page.scss'],
})
export class TournamentDetailPage implements OnInit {
  loadedTournament: TournamentI;

  constructor(private activedRoute: ActivatedRoute, private tournamentsService: TournamentsService) { }

  ngOnInit() {
    this.activedRoute.paramMap.subscribe( paramMap => {
      if(!paramMap.has('tournamentId')) {
        //redirect
        return;
      }

      const tournamentId = paramMap.get('tournamentId');
      this.loadedTournament = this.tournamentsService.getTournamentById(
        tournamentId
      );
    });
  }

}
