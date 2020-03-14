import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TournamentDetailPage } from './tournament-detail.page';

describe('TournamentDetailPage', () => {
  let component: TournamentDetailPage;
  let fixture: ComponentFixture<TournamentDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TournamentDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
