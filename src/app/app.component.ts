import { Component } from '@angular/core';

export class O {
  value: string;

  constructor() {
    this.value = null;
  }
}

export class Board {
  name: string;
  board: any[10][10];
 
  constructor(name: string) {
    this.name = name;
    this.board = [
      [new O(), new O(), new O(), new O(), new O(), new O(), new O(), new O(), new O(), new O()],
      [new O(), new O(), new O(), new O(), new O(), new O(), new O(), new O(), new O(), new O()],
      [new O(), new O(), new O(), new O(), new O(), new O(), new O(), new O(), new O(), new O()],
      [new O(), new O(), new O(), new O(), new O(), new O(), new O(), new O(), new O(), new O()],
      [new O(), new O(), new O(), new O(), new O(), new O(), new O(), new O(), new O(), new O()],
      [new O(), new O(), new O(), new O(), new O(), new O(), new O(), new O(), new O(), new O()],
      [new O(), new O(), new O(), new O(), new O(), new O(), new O(), new O(), new O(), new O()],
      [new O(), new O(), new O(), new O(), new O(), new O(), new O(), new O(), new O(), new O()],
      [new O(), new O(), new O(), new O(), new O(), new O(), new O(), new O(), new O(), new O()],
      [new O(), new O(), new O(), new O(), new O(), new O(), new O(), new O(), new O(), new O()]
    ];
    }

    place_all_ships() {
        
    }

    place_battle_ship() {
    }
}

export class Player {
  name: string;
  player_map: Board;
  opponent_map: Board;
}
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Battleships';
  player: Player = {
    name: 'You',
    player_map: new Board('You'),
    opponent_map: new Board('Opponent')
  };
  onSelect(cell: O): void {
    cell.value = "X";
  }
}
