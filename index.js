require('dotenv').config();
const express = require('express');
const app = express();
const corsMiddleWare = require("cors");
const { PORT } = require("./config/constants");
const jsonParser = express.json();

const booksRouter = require('./routers/books');
const categoryRouter = require('./routers/category');


app.use(corsMiddleWare());
app.use(jsonParser);

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

app.use('/books', booksRouter);
app.use('/categories', categoryRouter);


app.listen(PORT, () => console.log(`Listening to port ${PORT}`))