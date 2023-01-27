import {Component} from '@angular/core';
import {Tournament} from "./tournament";
import {TOURNAMENTS} from "./mock-tournament";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angtutorial';
  historic_tournaments = [
    'Kolbermoor Schleiferlturnier', 'Neuaubing Teamcup', 'Moonlightcup'
  ]
  tournaments: Tournament[] = TOURNAMENTS;


}
