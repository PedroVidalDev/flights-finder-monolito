import dotenv from 'dotenv';
import express from 'express';
import { Request, Response } from 'express';

import { indexRouter } from './src/routes';
import { PrismaClientSingleton } from './src/config/db/PrismaClientSingleton';

dotenv.config();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

PrismaClientSingleton.getInstance().$connect().then(() => {
  console.log('Connected to the database successfully');
}
).catch((error) => {
  console.error('Database connection failed:', error);
  process.exit(1);
});

app.use(indexRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

export default app;