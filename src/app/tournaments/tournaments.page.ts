import { Component, OnInit } from '@angular/core';
import { TournamentI } from './tournament.model';
import { TournamentsService } from './tournaments.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.page.html',
  styleUrls: ['./tournaments.page.scss'],
})
export class TournamentsPage implements OnInit {
  activeTournaments: TournamentI[];
  upComingTournaments: TournamentI[];

  constructor(
    private tournamentsService: TournamentsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activeTournaments = this.tournamentsService.getActiveTournaments();
    this.upComingTournaments = this.tournamentsService.getUpComingTournaments();
  }

  onTournamentClick(id: number): void {
    this.router.navigate(['./', id], { relativeTo: this.route });
  }
}
