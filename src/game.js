'use strict';

class Game {

    constructor(decks, matchingMode) {
        this.decks = decks;
        this.matchingMode = matchingMode;
    }

    start() {
        console.log(`Starting game with ${this.decks} desks and matching mode ${this.matchingMode}`);
    }
}


module.exports = Game;