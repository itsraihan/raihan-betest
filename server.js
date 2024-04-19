import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import methodOverride from 'method-override';
const routesV1 = require('./src/routes/v1/index.route');

import config from './src/config';
import connectDB from './src/config/db';

const app = express();

app.use(morgan(config.logs));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(helmet());
app.use(cors());

app.get('/', (_req, res) => res.send({ message: 'Hello World!' }));

app.use('/api/v1', routesV1);

connectDB();

app.listen(config.port, () => {
  console.log(`app run on port ${config.port}`);
});
