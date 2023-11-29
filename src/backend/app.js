const express = require('express'),
  bodyParser = require('body-parser'),
  logger = require('morgan');
require('dotenv').config();

const app = express();
const { routerPersonnel } = require('./routes/api/personnel');
const { routerCars } = require('./routes/api/cars');

const formatLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatLogger));
app.use(bodyParser.json());

app.use('/api/personnel', routerPersonnel);
app.use('/api/cars', routerCars);

app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

module.exports = app;
