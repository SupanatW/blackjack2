import {CardComponent, suits } from './card';

export class Deck {
  spade1 = new CardComponent(1, suits.spade);
  spade2 = new CardComponent(2, suits.spade);
  spade3 = new CardComponent(3, suits.spade);
  spade4 = new CardComponent(4, suits.spade);
  spade5 = new CardComponent(5, suits.spade);
  spade6 = new CardComponent(6, suits.spade);
  spade7 = new CardComponent(7, suits.spade);
  spade8 = new CardComponent(8, suits.spade);
  spade9 = new CardComponent(9, suits.spade);
  spade10 = new CardComponent(10, suits.spade);
  spade11 = new CardComponent(11, suits.spade);
  spade12 = new CardComponent(12, suits.spade);
  spade13 = new CardComponent(13, suits.spade);
  diamond1 = new CardComponent(1, suits.diamond);
  diamond2 = new CardComponent(2, suits.diamond);
  diamond3= new CardComponent(3, suits.diamond);
  diamond4 = new CardComponent(4, suits.diamond);
  diamond5 = new CardComponent(5, suits.diamond);
  diamond6 = new CardComponent(6, suits.diamond);
  diamond7 = new CardComponent(7, suits.diamond);
  diamond8 = new CardComponent(8, suits.diamond);
  diamond9 = new CardComponent(9, suits.diamond);
  diamond10 = new CardComponent(10, suits.diamond);
  diamond11 = new CardComponent(11, suits.diamond);
  diamond12 = new CardComponent(12, suits.diamond);
  diamond13 = new CardComponent(13, suits.diamond);

  club1 = new CardComponent(1, suits.club);
  club2 = new CardComponent(2, suits.club);
  club3 = new CardComponent(3, suits.club);
  club4 = new CardComponent(4, suits.club);
  club5 = new CardComponent(5, suits.club);
  club6 = new CardComponent(6, suits.club);
  club7 = new CardComponent(7, suits.club);
  club8 = new CardComponent(8, suits.club);
  club9 = new CardComponent(9, suits.club);
  club10 = new CardComponent(10, suits.club);
  club11 = new CardComponent(11, suits.club);
  club12 = new CardComponent(12, suits.club);
  club13 = new CardComponent(13, suits.club);
  heart1 = new CardComponent(1, suits.heart);
  heart2 = new CardComponent(2, suits.heart);
  heart3 = new CardComponent(3, suits.heart);
  heart4 = new CardComponent(4, suits.heart);
  heart5 = new CardComponent(5, suits.heart);
  heart6 = new CardComponent(6, suits.heart);
  heart7 = new CardComponent(7, suits.heart);
  heart8 = new CardComponent(8, suits.heart);
  heart9 = new CardComponent(9, suits.heart);
  heart10 = new CardComponent(10, suits.heart);
  heart11 = new CardComponent(11, suits.heart);
  heart12 = new CardComponent(12, suits.heart);
  heart13 = new CardComponent(13, suits.heart);
  deck = [this.spade1,this.spade2,this.spade3,this.spade4,this.spade5,this.spade6,this.spade7,this.spade8,this.spade9,this.spade10,this.spade11,this.spade12,this.spade13,
  this.diamond1,this.diamond2,this.diamond3,this.diamond4,this.diamond5,this.diamond6,this.diamond7,this.diamond8,this.diamond9,this.diamond10,this.diamond11,this.diamond12,this.diamond13,
this.club1,this.club2,this.club3,this.club4,this.club5,this.club6,this.club7,this.club8,this.club9 ,this.club10,this.club11,this.club12,this.club13,
this.heart1, this.heart2,this.heart3,this.heart4,this.heart5,this.heart6,this.heart7,this.heart8,this.heart9,this.heart10,this.heart11,this.heart12,this.heart13];
  card: CardComponent;
constructor() {

  }

  shuffle() {
    var currentIndex = this.deck.length;
    var temporaryValue;
    var randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.deck[currentIndex];
      this.deck[currentIndex] = this.deck[randomIndex];
      this.deck[randomIndex] = temporaryValue;
    }

    return this.deck;
  }

  drawCard() {
    this.card = this.deck.pop();
    return this.card;
  }

  resetDeck() {
    this.deck = [this.spade1, this.spade2, this.spade3, this.spade4, this.spade5, this.spade6,
      this.spade7, this.spade8, this.spade9, this.spade10, this.spade11, this.spade12, this.spade13,
      this.diamond1, this.diamond2, this.diamond3, this.diamond4, this.diamond5, this.diamond6,
      this.diamond7, this.diamond8, this.diamond9, this.diamond10, this.diamond11, this.diamond12, this.diamond13,
      this.club1, this.club2, this.club3, this.club4, this.club5, this.club6, this.club7, this.club8, this.club9,
      this.club10, this.club11, this.club12, this.club13, this.heart1, this.heart2, this.heart3, this.heart4,
      this.heart5, this.heart6, this.heart7, this.heart8, this.heart9, this.heart10, this.heart11, this.heart12, this.heart13];
  }
}

