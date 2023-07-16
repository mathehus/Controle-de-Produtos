require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ProductRoute = require('./routes/productRoute');
const errorMiddleware = require('./middleware/erroMiddleware');


const MONGO_URL = process.env.MONGO_URL; 
const PORT = process.env.PORT;

// used to work with json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api' , ProductRoute);

//routes Main 
app.get('/', (req, res) => {
   //throw new Error('Fake error');
    res.send('Welcome')
})

app.use(errorMiddleware);

// connection to mongoDB
mongoose.connect(MONGO_URL).then(() => {
    console.log('Connection established');
    app.listen(PORT, () => {
        console.log(`Node API app is run ning on port ${PORT}`);
    })
}).catch((err) => {
    console.log('Error connection')
})
