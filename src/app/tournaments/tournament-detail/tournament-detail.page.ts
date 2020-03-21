import { Component, OnInit, ViewChild } from '@angular/core';
import { TournamentI } from '../tournament.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TournamentsService } from '../tournaments.service';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tournament-detail',
  templateUrl: './tournament-detail.page.html',
  styleUrls: ['./tournament-detail.page.scss'],
})
export class TournamentDetailPage implements OnInit {
  @ViewChild('slides', { static: true }) slides: IonSlides;

  loadedTournament: TournamentI;
  selectedSegment = '3';
  slideOptions = {
    initialSlide: parseInt(this.selectedSegment, 0),
    speed: 400,
  };

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

  segmentChanged(segment: CustomEvent) {
    const index = segment.detail.value;
    this.selectedSegment = index;
    this.slides.slideTo(index);
  }

  async slideChanged() {
    this.selectedSegment = (await this.slides.getActiveIndex()).toString();

  }
}
