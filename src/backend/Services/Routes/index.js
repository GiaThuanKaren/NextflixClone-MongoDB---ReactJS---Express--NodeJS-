const loginRouter = require('./login')
const RegisRouter = require('./regist')

function Routes(app){
    app.use('/login',loginRouter)
    app.use('/register',RegisRouter)
}

module.exports = Routes