export class Tournament {

  constructor(id:number,name: string, winner_name: string, location: string) {
    this.id =id;
    this.name = name;
    this.winner_name = winner_name;
    this.location = location;
  }

  id: number;
  name: string;
  winner_name: string;
  location: string;

}
