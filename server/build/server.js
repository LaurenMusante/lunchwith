'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _users = require('./src/controllers/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// server.js
var app = (0, _express2.default)();

app.use(_express2.default.json());

app.get('/', function (req, res) {
  return res.status(200).send({ 'message': 'YAY! Congratulations! Your first endpoint is working' });
});

app.listen(5000);
console.log('app running on port ', 5000);

app.post('/api/v1/users', _users2.default.create);
app.get('/api/v1/users', _users2.default.getAll);
app.get('/api/v1/users/:id', _users2.default.getOne);
app.put('/api/v1/users/:id', _users2.default.update);
app.delete('/api/v1/users/:id', _users2.default.delete);