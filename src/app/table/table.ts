import { Deck } from '../equipment/deck';
import { CardComponent } from '../equipment/card';
import { Human } from '../human/human';
import { Player, Status } from '../human/player';
import { Dealer } from '../human/dealer';
import {LoggingService} from '../service/loggingService';
export class Table {
  players: Player[] = [];
  dealer = new Dealer();
  deck = new Deck();
  card: CardComponent;
  playerTurn = 1;
  openDealerCard = false;
  isStarted = false;
  playerRemove: Player[] = [];
  isDealerTurn = false;

  constructor() {

  }
  startGame() {
    console.log('start game');
    this.isStarted = true;
    this.endGame();
    this.deck.shuffle();

    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < this.players.length; j++) {
        this.giveCard(this.players[j]);
        this.players[j].Status = Status.standBy;
      }
      this.giveDealerCard();

    }
    this.dealer.popCard();
    this.nextPlayer(-1);
  }

  endGame() {
    this.openDealerCard = false;
    this.deck.resetDeck();
    this.dealer.resetCardOnHand();
    for (let j = 0; j < this.players.length; j++) {
      this.players[j].reset();
    }

  }
  giveCard(player: Player) {
    this.card = this.deck.deck.pop();
    player.getCard(this.card);
  }
  giveDealerCard() {
    this.card = this.deck.deck.pop();
    this.dealer.getCard(this.card);
  }

  hit(player: Player){
    this.giveCard(player);
    this.checkPlayerStatus(player);
  }

  checkWin() {
    let betMoney = 0;
    LoggingService.log('starting');
    for(let i = 0; i < this.players.length; i++) {
      const player = this.players[i];
      if(player.Status === Status.blackjacked) {
        betMoney = player.betSize * 3;

      }else if(player.Status === Status.fiveCard) {
        betMoney = player.betSize * 2.5;
      }else if(player.Status === Status.draw) {
        betMoney = player.betSize;
      }else if(player.Status === Status.win) {
        betMoney = player.betSize * 2;
      }else{
        betMoney = 0;
      }
      LoggingService.log(`Player: ${player.name} earns ${betMoney} baht`);
      player.getMoney(betMoney);
      if(player.money <= 0) {
        this.playerRemove.push(player);
        // this.removePlayer(player);
      }
    }
    this.removePlayer(this.playerRemove);
  }

  checkPlayerStatus(player: Player) {
    if(player.getPointOnHand() >= 21) {
      if(player.getPointOnHand() > 21) {
        player.Status = Status.burned;
        this.nextPlayer(this.players.indexOf(player));
      }else {
        player.Status = Status.blackjacked;
        this.nextPlayer(this.players.indexOf(player));
      }
    }else {
      if(player.cardOnHand.length === 5 ) {
        player.Status = Status.fiveCard;
        this.nextPlayer(this.players.indexOf(player));
      }
    }
  }

  stay(player: Player) {
    player.Status = Status.stayed;
    this.nextPlayer(this.players.indexOf(player));
  }
  bet(player: Player) {
    player.bet(player.betSize);
  }
  nextPlayer(index: number) {
    if(index + 1 >= this.players.length) {
      this.openDealerCard = true;
      this.isDealerTurn = true;
      this.dealer.flipCard();
      }else{
        this.players[index + 1].Status = Status.playing;
        this.checkPlayerStatus(this.players[index + 1]);
      }

  }

  dealerDraw() {
    if(this.dealer.pointOnHand >= 16) {
      this.isDealerTurn = false;
      this.comparePoint();
    }else {
      this.giveDealerCard();
    }
  }

  addPlayer(name: string) {
    this.players.push(new Player(name, Status.betting));
  }

  removePlayer(removePlayer: Player[]) {
    // this.players.splice(this.players.indexOf(player) , 1);
    removePlayer.forEach(player => {
      this.players.splice(this.players.indexOf(player) , 1);
    });
  }

  comparePoint() {
    for( let i = 0; i < this.players.length; i++) {
      if(this.players[i].Status === Status.stayed){
        if((this.dealer.getPointOnHand() < this.players[i].getPointOnHand()) || this.dealer.getPointOnHand() > 21) {
          // player win
          this.players[i].Status = Status.win;
        }
        else {
          if(this.dealer.getPointOnHand() > this.players[i].getPointOnHand()) {
            //player lose
            this.players[i].Status = Status.lose;
          }
          else {
            //draw
            this.players[i].Status = Status.draw;
          }
      }

      }
    }
    this.checkWin();

    this.isStarted = false;
  }
}
