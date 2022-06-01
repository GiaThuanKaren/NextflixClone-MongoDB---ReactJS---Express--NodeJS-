const loginRouter = require('./login')
function Routes(app){
    app.use('/login',loginRouter)
    
}

module.exports = Routes