// server.js
import express from 'express';
import dotenv from 'dotenv';
import 'babel-polyfill';
import UserWithJsObject from './src/usingJSObject/controllers/users';
import UserWithDB from './src/usingDB/controllers/users';

dotenv.config();
const users = process.env.TYPE === 'db' ? UserWithDB : UserWithJsObject;
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).send({ 'message': 'YAY! Congratulations! Your first endpoint is working' });
});

app.post('/api/v1/users', users.create);
app.get('/api/v1/users', users.getAll);
app.get('/api/v1/users/:id', users.getOne);
app.put('/api/v1/users/:id', users.update);
app.delete('/api/v1/users/:id', users.delete);

app.listen(3000)
console.log('app running on port ', 3000);