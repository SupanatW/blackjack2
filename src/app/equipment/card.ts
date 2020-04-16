export class CardComponent {
  point: number;
  suit: suits;
  constructor(points: number, suit: suits) {
     this.point = points;
     this.suit = suit;
  }
}

export enum suits{
  heart = 'heart',
  spade = 'spade',
  diamond = 'diamond',
  club = 'club'
}
