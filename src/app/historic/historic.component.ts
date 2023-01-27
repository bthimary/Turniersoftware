import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Tournament} from "../tournament";
import {TOURNAMENTS} from "../mock-tournament";
import {TournamentComponent} from "../tournament/tournament.component";

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.css']
})
export class HistoricComponent {
  @Input()
  selectTournament?: Tournament=TOURNAMENTS[0];
  @Output() selectEmitter= new EventEmitter<Tournament>();
  tournaments: Tournament[] = TOURNAMENTS

  showHistoryTournament(tournament: Tournament) {
    this.selectTournament = tournament
    this.selectEmitter.emit(this.selectTournament);
  }
}
