const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Product = require('./models/productModel');

// used to work with json
app.use(express.json());

//routes Main
app.get('/', (req, res) => {
    res.send('Welcome a')
})

// search all products
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json({ products })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

// to update specific product
app.put('/product/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body)
        if(!product) {
           return res.status(404).json({ message: `cannot find any product with ID ${id}` });
        }
        const productUpdate = await Product.findById(id)
        res.status(200).json({ productUpdate })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})
// search specific product
app.get('/product/:id/:a', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id)
        res.status(200).json({ product })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})
//create new product
app.post('/products', async (req, res) => {
    try {

        const product = await Product.create(req.body);
        res.status(200).json({ product })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//delete a specific product 
app.delete('/product/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id)
        if(!product) {
            return res.status(404).json({ message: `cannot find any product with ID ${id}` });
        }
        res.status(200).json({ product })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

// connection to mongoDB
mongoose.connect('mongodb://localhost:27017').then(() => {
    console.log('Connection established');
    app.listen(3000, () => {
        console.log('Node API app is run ning on port 3000');
    })
}).catch((err) => {
    console.log('Error connection')
})
