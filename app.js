const express = require('express');
const app = express();

const tourRouter = require('./routes/tourRoute');
const userRouter = require('./routes/userRoute');

const morgan = require('morgan');

app.use(morgan('dev'));

app.use(express.json());
app.use((req, res, next) => {
  next();
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});