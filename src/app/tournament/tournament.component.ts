import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Tournament} from "../tournament";
import {TOURNAMENTS} from "../mock-tournament";

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})

export class TournamentComponent implements OnInit{


  @Input() tournament?:Tournament;


  ngOnInit(): void {
  }

}
