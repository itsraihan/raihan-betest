import dotenv from 'dotenv-safe';
import path from 'path';

dotenv.config({
    allowEmptyValues: true,
    path: path.join(__dirname, '../../.env'),
    example: path.join(__dirname, '../../.env.example'),
});

const config = {
  port: process.env.PORT,
  database: {
    uri: process.env.MONGODB_URI,
    name: process.env.MONGODB_NAME,
  },
  kafka_host: process.env.KAFKA_HOST,
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
  jwt_secret: process.env.JWT_SECRET
};

module.exports = config; 
