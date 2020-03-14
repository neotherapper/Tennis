import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TournamentI } from 'src/app/tournaments/tournament.model';

@Component({
  selector: 'app-tournament-list-view',
  templateUrl: './tournament-list-view.component.html',
  styleUrls: ['./tournament-list-view.component.scss'],
})
export class TournamentListViewComponent implements OnInit {
  @Input()
  tournaments: TournamentI;

  @Input()
  tournamentHeader: string;

  @Output()
  tournamentClicked: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
