const mongoose = require('mongoose');

//create a new product
const productSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "Please enter a product name"]
        },
        quantity: {
            type: Number,
            required: [true],
            default: 0
        },
        price:{
            type: Number,
            require: true,
        },
        image: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)
//Collection
const Product = mongoose.model('products', productSchema)

//Export the script
module.exports = Product;