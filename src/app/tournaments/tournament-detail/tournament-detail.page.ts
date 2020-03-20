import { Component, OnInit } from '@angular/core';
import { TournamentI } from '../tournament.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TournamentsService } from '../tournaments.service';

@Component({
  selector: 'app-tournament-detail',
  templateUrl: './tournament-detail.page.html',
  styleUrls: ['./tournament-detail.page.scss'],
})
export class TournamentDetailPage implements OnInit {
  loadedTournament: TournamentI;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tournamentsService: TournamentsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('tournamentId')) {
        this.router.navigate(['./tournaments']);
        return;
      }

      const tournamentId = paramMap.get('tournamentId');
      this.loadedTournament = this.tournamentsService.getTournamentById(
        tournamentId
      );
    });
  }
}
