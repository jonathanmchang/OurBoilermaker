const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const morgan = require('morgan');

// Middleware
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, './public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routing
app.use('/api', require('./api'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Error Handling
app.use('/', (err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server Error!');
});

// Listening
const port = process.env.PORT || 1337;
app.listen(port, (req, res, next) => {
  console.log(`App listening on port ${port}`);
});
