import express from 'express';
import cookieParser from 'cookie-parser';
import errorHandlerMiddleware from '../middlewares/error-handler.middleware.js';
import UsersRouter from './routes/users.router.js';
import CharactersRouter from './routes/characters.router.js';
import 'dotenv/config';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use('/api', [UsersRouter, CharactersRouter]);
app.use(errorHandlerMiddleware);

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});
