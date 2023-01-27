import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Tournament} from "./tournament";
@Injectable({
  providedIn: 'root'
})
export class HistoryServiceService {
  private tournamentSource= new BehaviorSubject('tournament')
  currentTournament=this.tournamentSource.asObservable()
  constructor() { }

  public showTournament(tournament:Tournament){

  }
}
