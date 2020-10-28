module.exports = function(app){
    var index = require('../controllers/index.controller')
    app.get('/',index.render).post('/add',index.adddata)
}