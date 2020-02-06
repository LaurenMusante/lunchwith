import express from 'express';
import dotenv from 'dotenv';
import 'babel-polyfill';
import Lunch from './src/usingDB/controllers/lunches';
import UserWithDB from './src/usingDB/controllers/users';
import Auth from './src/usingDB/middleware/Auth';

dotenv.config();
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).send({ 'message': 'YAY! Congratulations! Your first endpoint is working' });
});

app.post('/api/v1/users', UserWithDB.create);
app.post('/api/v1/users/login', UserWithDB.login);
app.delete('/api/v1/users/me', Auth.verifyToken, UserWithDB.delete);

app.post('/api/v1/lunches', Auth.verifyToken, Lunch.create);
app.get('/api/v1/lunches', Auth.verifyToken, Lunch.getAll);
app.get('/api/v1/lunches/:id', Auth.verifyToken, Lunch.getOne);
app.put('/api/v1/lunches/:id', Auth.verifyToken, Lunch.update);
app.delete('/api/v1/lunches/:id', Auth.verifyToken, Lunch.delete);

app.listen(5000)
console.log('app running on port ', 5000);