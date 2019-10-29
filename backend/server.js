const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
const mogooseURI = process.env.ATLAS_URI;

mongoose.connect(mogooseURI, {
    useNewUrlParser: true,
    useCreateIndex: true
});
const connection = mongoose.connection;
connection.once('open', _ => {
    console.log('MongoDB connections is established successfully');
});


const userRouter = require('./routes/users');
const execiseRouter = require('./routes/execise');

app.use('/users', userRouter);
app.use('/exercise', execiseRouter);

app.listen(port, _ => console.log('Server running on port' + port));