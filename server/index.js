require('dotenv').config();




const mongoString = process.env.DATABASE_URL

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const router = express.Router()
module.exports = router;

app.use(express.json());
app.use("/api", router);



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



router.get('/getAll', async (req, res) => {
    let collection = await database.collection("cars")
    res.json(collection("cars").find({}))
})

