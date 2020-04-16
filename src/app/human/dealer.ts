import { Human } from './human';
import { CardComponent } from '../equipment/card';

export class Dealer extends Human {

  faceDownCard: CardComponent;
  constructor(){
    super('dealer');
  }

  popCard() {
    this.faceDownCard = this.cardOnHand.pop();
  }
  flipCard() {
    this.cardOnHand.push(this.faceDownCard);
    this.faceDownCard = null;
  }

}
