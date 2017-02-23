//This is our main server entry file

//bring in our dependencies 
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

//initialize app variable with express
const app = express();

//declare users
const users = require('./routes/users');

//set port
const port = 3000;

//enable access from other domains with cors
app.use(cors());

//body-parser init... parses incoming requests to be stored
app.use(bodyParser.json());

//anything that is localhost:3000/users will go to users file
app.use('/users', users)

//route to homepage [temporary]
app.get('/', (req, res) => {
    res.send('Invalid endpoint');
});

//app listening on this port, starts up server
app.listen(port, () => {
    console.log('Server started on port ' +port)
});