require('dotenv').config();
const express = require('express');
const app = express();
const corsMiddleWare = require("cors");
const { PORT } = require("./config/constants");
const jsonParser = express.json();

const booksRouter = require('./routers/books');
const categoryRouter = require('./routers/category');
const orderRouter = require('./routers/order');
const paymentRouter = require('./routers/payments')
const userRouter = require('./routers/users');


app.use(corsMiddleWare());
app.use(jsonParser);

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

app.use('/books', booksRouter);
app.use('/categories', categoryRouter);
app.use('/orders', orderRouter);
app.use('/checkout', paymentRouter);
app.use('/users', userRouter);

app.listen(PORT, () => console.log(`Listening to port ${PORT}`))