import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import methodOverride from 'method-override';

import config from './src/config';

const app = express();

app.use(morgan(config.logs));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(helmet());
app.use(cors());

app.get('/', (req, res) => res.send({ message: 'Hello World!' }));

app.listen(config.port, () => {
  console.log(`app run on port ${config.port}`);
});
