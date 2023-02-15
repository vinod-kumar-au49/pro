const express = require('express');
const { initDB } = require('./dbConfig');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const authRouter = require('./routes/authRouter');
const cakeRouter = require('./routes/cakeRouter');
const orderRouter = require('./routes/orderRouter');

const app = express();

const dotenv = require('dotenv');
dotenv.config();

initDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/', authRouter);
app.use('/cakes', cakeRouter);
app.use('/orders', orderRouter);

const PORT = process.env.PORT || 8000
app.listen(8000, () => {
    console.log("server started successfully")
});