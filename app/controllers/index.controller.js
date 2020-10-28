var {temprtcs} = require('../models/temprtc.model')

var render=(req,res)=>{
    temprtcs.find({},(err,data)=>{
        if(!err)
        res.render('index',{trdata:data})
    })
}
var adddata=(req,res)=>{
    var add = temprtcs.insertMany(req.body)
    res.json(add)
}
module.exports={
    render,
    adddata
}