const express = require('express');
const path = require('path');
const cardsRouter = require('./routers/cards');
const usersRouter = require('./routers/users');

const { PORT = 300 } = process.env;

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use('/cards', cardsRouter);
app.use('/users', usersRouter);
app.use('*', (req, res) => {
  res.status(400).json({ message: 'Запрашиваемый  ресурс не найден' });
});

app.listen(PORT);
