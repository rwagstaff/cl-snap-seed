'use strict';

const _ = require('lodash');
const prompt = require('prompt');
const Game = require('./Game');


const schema = {
    properties: {
        decks: {
            type: 'integer',
            pattern: /[0-9]+/,
            message: 'Please enter the number of card desks to use',
            required: true
        },
        condition: {
            type: 'string',
            pattern: 'card|suit|both',
            message: 'Please enter the matching condition for the matching to use card, suit or both',
            required: true
        }
    }
};


prompt.get(schema, function (err, result) {
    console.log('Command-line input received:');

    const game = new Game(result.decks, result.condition);
    game.start();

});

