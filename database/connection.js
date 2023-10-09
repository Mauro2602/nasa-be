const url = "mongodb://127.0.0.1/test";
const mongoose = require('mongoose');

mongoose
  .connect(url,
    { useNewUrlParser: true, useUnifiedTopology: true })
  .catch(error => {
    console.error(error, 'mongo-connection');
    process.exit(1);
  });

mongoose.connection.on('connected', () => {
  console.info('Connected to mongo database');
});

mongoose.connection.on('error', error => {
  console.info('An error has occurred trying to connect to mongo database');
  console.error(error, 'mongo-connection');
});

module.exports = mongoose;