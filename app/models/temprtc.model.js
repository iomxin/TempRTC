var mongoose = require('mongoose')
var Schema = mongoose.Schema

var tempSchema = new Schema({
    temp: Number,
    humi:Number,
    min:Number,
    hour:Number,
    day:Number,
    month:Number,
    year:Number
})

var temprtcs=mongoose.model('temprtcs',tempSchema)
module.exports={temprtcs}