const express = require('express');
const quotesController = require('../controllers/quotes.controllers');

const router = express.Router();

router.get('/', quotesController.getRandomQuotes);

module.exports = router;