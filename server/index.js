/* eslint-disable */

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

// Set env variables in dev env
if (app.get('env') == 'development') require('dotenv').config();

// Import DB
const db = require('./db');

// config
const PORT = process.env.PORT || 3000;
app.enable('trust proxy');

// middleware
app.use(morgan('tiny')); // server logger
app.use(helmet()); // header security
app.use(cors()); // cross origin resources
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '300kb' }));

// serve static/build files
app.use(express.static('dist'));

// api controllers/routers
const users = require('./routes/users');
const lunches = require('./routes/lunches');

app.use('/api/users', users);
app.use('/api/lunches', lunches);

// test for client comm to server
app.get('/api/hello', (req, res) => {
  res.send({ message: "Hello there!" });
});

// port listener and happy-happy report
app.listen(PORT, () => console.log('Server OK'));