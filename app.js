const express = require('express');
const db = require('./data/database');

const quoteRoute = require('./routes/quotes.routes');



const app = express();


app.use('/quote', quoteRoute);

app.use(function(error, req, res, next){
    res.status(500).json({
        message: "something went wrong."
    });
});

db.connectToDatabase()
  .then(function () {
    app.listen(3000, function(req, res){
        console.log('Successfully connected to the DB');
    });
  })
  .catch(function (error) {
    console.log('Failed to connect to the database!');
    console.log(error);
  });
