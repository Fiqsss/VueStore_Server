const dbConfig = require('../../config/db.config')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const db = {} 
db.mongoose = mongoose
db.url = dbConfig.url
db.Products = require('./product.model')(mongoose)
db.Orders = require('./orde.model')(mongoose)

module.exports = db