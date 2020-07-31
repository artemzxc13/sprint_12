const cardsRouter = require('express').Router();
const path = require('path');
const cards = require('../middle/cards');

const dataPath = path.join(__dirname, '../data/cards.json');
cardsRouter.get('/', (req, res) => {
  cards({ dataPath, res });
});

module.exports = cardsRouter;
