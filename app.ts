import * as path from 'path';
import * as dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { connect } from 'mongoose';
import express from 'express';

import indexRouter from './src/routes';
import apiRouter from './src/routes/api';

dotenv.config();
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    credentials: true,
  },
});
const corsMiddleware = cors({
  credentials: true,
  origin: process.env.ENV === 'dev' ? ['http://localhost:4200'] : undefined,
});
app.use(corsMiddleware);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'frontend/dist/WycieczkiApp')));

app.use('/', indexRouter);
app.use('/api', apiRouter(io));

if (!process.env.ATLAS_MONGO_URL) {
  logger('Bad server configuration: ATLAS_MONGO_URL missing.');
  process.exit(1);
}

connect(process.env.ATLAS_MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    logger('Connected to Mongo Atlas');
  });

const port = process.env.PORT || 3000;

httpServer.listen(port, () => {
  logger(`App is listening on port ${port}!`);
});
