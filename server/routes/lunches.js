/* eslint-disable */

const express = require('express');
const router = express.Router();

const db = require('../db');

// create table lunches:
GET('/create', () => db.lunches.create());

// drop the table:
GET('/drop', () => db.lunches.drop());

// remove all lunches:
GET('/empty', () => db.lunches.empty());

// add a new user lunch, if it doesn't exist yet, and return the object:
POST('/add/:userId/:name', req => {
  return db.task('add-lunch', t => {
    return t.lunches.find(req.params)
      .then(lunch => {
        return lunch || t.lunches.add(req.params);
      });
  });
});

// find a lunch by user id + lunch name id:
GET('/find/:userId/:name', req => db.lunches.find(req.params));

// remove a lunch by id:
GET('/remove/:id', req => db.lunches.remove(req.params.id));

// get all lunches:
GET('/all', () => db.lunches.all());

// count all lunches:
GET('/total', () => db.lunches.total());


function GET(url, handler) {
  router.get(url, async (req, res) => {
    try {
      let data = await handler(req);
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(400).json({ err: err.message || err });
    }
  });
};

function POST(url, handler) {
  router.post(url, async (req, res) => {
    console.log('Request body: ', req.body);
    try {
      let data = await handler(req);
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(422).json({ err: err.message || err });
    }
  });
};

module.exports = router;