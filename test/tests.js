const assert = require('assert');
const Game = require('../src/Game');

describe('Game', () => {
    it('should start the game', () => {
        const game = new Game(1, 'both');
        game.start()
        assert.equal(game.decks, 1);
        assert.equal(game.matchingMode, 'both');    
    })
});