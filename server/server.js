import express from 'express';
import dotenv from 'dotenv';
import 'babel-polyfill';
import UserWithDB from './src/usingDB/controllers/users';
import Auth from './src/usingDB/middleware/Auth';

dotenv.config();
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).send({ 'message': 'YAY! Congratulations! Your first endpoint is working' });
});

// app.get('/api/v1/users', UserWithDBgetAll);
// app.get('/api/v1/users/:id', UserWithDBgetOne);
// app.put('/api/v1/users/:id', Auth.verifyToken, UserWithDBupdate);
// app.delete('/api/v1/users/:id', Auth.verifyToken, UserWithDBdelete);
app.post('/api/v1/users', UserWithDB.create);
app.post('/api/v1/users/login', UserWithDB.login);

app.listen(5000)
console.log('app running on port ', 5000);