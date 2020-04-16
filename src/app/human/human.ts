import { CardComponent } from '../equipment/card';


export class Human {
  name: string;
  cardOnHand: CardComponent[] = [];
  pointOnHand = 0;
  constructor(name: string){
    this.name = name;
  }

  calPoint() {
    this.pointOnHand = 0;
    let point = 0;
    for(let i=0; i < this.cardOnHand.length; i++ ){
      point = this.cardOnHand[i].point;
      if ( point > 10) {
        point = 10;
      }
      if ( point === 1) {
        this.pointOnHand += 11;
      } else {
        this.pointOnHand += point;
      }
    }
    for(let i=0; i < this.cardOnHand.length; i++ ){
      if(this.pointOnHand > 21){
        if(this.cardOnHand[i].point === 1){
          this.pointOnHand -= 10;
        }
      }
    }
    return this.pointOnHand;
  }

  getCard(card: CardComponent) {
    this.cardOnHand.push(card);
  }

  getPointOnHand() {
    this.calPoint();
    return this.pointOnHand;
  }
  resetCardOnHand(){
    this.cardOnHand = [];
  }
}
