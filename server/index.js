require('dotenv').config();
const routes = require('./routes/routes');




const mongoString = process.env.DATABASE_URL

const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use('/api', routes)

app.use(express.json());




mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})



app.listen(8080, () => {
    console.log(`Server Started at ${8080}`)
})
