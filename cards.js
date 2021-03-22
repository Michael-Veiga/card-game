// card class for each individual card
class Card {
  constructor(suit, rank, value) {
    this.suit = suit;
    this.rank = rank;
    this.value = value;
  }
}

// deck class
class Deck {
  constructor() {
    this.cards = [];
  }
  createDeck() {
    let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
    let ranks = [
      'ace',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'jack',
      'queen',
      'king',
    ];
    let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        this.cards.push(new Card(suits[i], ranks[j], values[j]));
      }
    }
  }
  shuffleDeck() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }
  clearDeck() {
    this.cards.length = 0;
  }
}

class Player {
  constructor(name) {
    this.playerName = name;
    this.playerCards = [];
    this.cardSum = 0;
  }
  getCardSum() {
    for (let i = 0; i < this.playerCards.length; i++) {
      this.cardSum += this.playerCards[i].value;
    }
  }
}

class Board {
  constructor() {
    this.cardsInMiddle = [];
    this.players = [];
  }
  start(playerOneName, playerTwoName) {
    this.players.push(new Player(playerOneName));
    this.players.push(new Player(playerTwoName));
    let d = new Deck();
    d.createDeck();
    d.shuffleDeck();
    this.players[0].playerCards = d.cards.slice(0, 26);
    this.players[1].playerCards = d.cards.slice(26, 52);

    this.players[0].getCardSum();
    this.players[1].getCardSum();
  }
}

let gameBoard = new Board();
gameBoard.start('Mike', 'Tory');

console.log(gameBoard.players);
console.log(gameBoard.players[0].cardSum);
console.log(gameBoard.players[1].cardSum);

if (gameBoard.players[0].cardSum > gameBoard.players[1].cardSum) {
  alert('Player One Wins');
} else if (gameBoard.players[1].cardSum > gameBoard.players[0].cardSum) {
  alert('Player Two Wins');
} else if (gameBoard.players[0].cardSum === gameBoard.players[1].cardSum) {
  alert('Its a tie!');
}
