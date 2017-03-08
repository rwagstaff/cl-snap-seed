'use strict';

class Game {

    constructor(noOfDesks, matchingMode) {
        this.noOfDesks = noOfDesks;
        this.matchingMode = matchingMode;
    }

    start() {
        console.log(`Starting game with ${this.noOfDesks} desks and matching mode ${this.matchingMode}`);
    }
}


module.exports = Game;