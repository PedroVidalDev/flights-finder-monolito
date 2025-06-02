import express from 'express';
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import { indexRouter } from './src/routes';

dotenv.config();

const app = express();

app.use(express.json());

app.use(indexRouter);

app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

export default app;