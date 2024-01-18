const mongoose = require('mongoose')
module.exports = mongoose => {
    const Schema = mongoose.Schema(
        {
            code : String,
            name: String,
            price: Number,
            description: String,
            ImageUrl: String,
            averageRating: Number
        }
    )
    
    Schema.method("toJSON" , function(){
        const {__v, _id, ...object} = this.toObject()
        object.id = _id;
        return object
    })

    const Product = mongoose.model("products" , Schema)
    return Product

}

