const { builtinModules } = require('module')
var mongoose = require('mongoose')

module.exports=()=>{
    mongoose.set('debug',true)
    var db = mongoose.connect('mongodb://localhost/s60030098')
    require('../app/models/temprtc.model')
    return db
}