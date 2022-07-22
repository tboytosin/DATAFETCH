const Quote = require('../models/quote.model');

async function getRandomQuotes (req, res, next){
    let randomQuote
    try{
        randomQuote = await Quote.getRandomQuotes();
    }
    catch (error){
        return next(error);
    }
    
    res.json({
        quote: randomQuote
    });
}

module.exports = {
    getRandomQuotes: getRandomQuotes
};