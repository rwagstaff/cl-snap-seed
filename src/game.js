'use strict';

class Game {

    constructor(noOfDesks, matchingMode) {
        this.noOfDesks = noOfDesks;
        this.matchingMode = matchingMode;
    }

    start() {
        console.log(`Starting game with ${this.noOfDesks} macthing mode ${this.matchingMode}`);
    }
}


module.exports = Game;