import mongoose from 'mongoose';
import config from '../config/config';
import app from './express';

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri);
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`);
});

app.listen(config.port, (err) => {
  if (err) {
    process.stdout.write(err);
  }
  process.stdout.write('Server started on port %s.', config.port);
});
