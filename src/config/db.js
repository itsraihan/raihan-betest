import mongoose from 'mongoose';
import config from '../config';

async function connectDB() {
  try {
    await mongoose.connect(config.database.uri, {
      dbName: config.database.name
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

export default connectDB;
