import { Human } from './human';

export class Player extends Human {
  money = 1000000;
  status: Status;
  betSize = 0;

  constructor(name: string, status: Status) {
    super(name);
    this.Status = status;
  }
  reset(){
    super.resetCardOnHand();
    this.Status = Status.betting;
  }

  bet(price: number) {
    this.money = this.money - price;
    return this.money;
  }
  get Status() {
    return this.status;
  }
  set Status(status: Status) {
    this.status = status;
  }
  getMoney(reward: number) {
    this.money = this.money + reward;
  }
}

export enum Status{
  standBy = 'standBy',
  playing = 'playing',
  stayed = 'stayed',
  burned = 'burned',
  blackjacked = 'blackjacked',
  fiveCard = 'fiveCard',
  win = 'win',
  lose = 'lose',
  draw = 'draw',
  betting = 'betting'
}
