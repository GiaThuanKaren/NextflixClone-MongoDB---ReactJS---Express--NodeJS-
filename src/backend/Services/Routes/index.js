const loginRouter = require('./login')
const RegisRouter = require('./regist')
const UserRouter = require('./user')
function Routes(app){
    app.use('/login',loginRouter)
    app.use('/register',RegisRouter)
    app.use('/user' ,UserRouter)

}

module.exports = Routes