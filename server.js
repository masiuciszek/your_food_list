const express = require('express');

const app = express();
const connectDb = require('./db/connectDb');

const port = process.env.PORT || 5000;
app.use(express.json());

connectDb();

app.use('/users', require('./routes/users'));
app.use('/dishes', require('./routes/dishes'));
app.use('/auth', require('./routes/auth'));

app.listen(port, () => console.log(`server is running on port ${port}`));
