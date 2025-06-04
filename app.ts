import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

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

app.use(cors());

app.use(indexRouter);

export default app;