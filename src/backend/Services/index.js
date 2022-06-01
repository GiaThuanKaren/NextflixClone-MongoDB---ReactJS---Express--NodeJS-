const express = require('express')
const Routes = require('./Routes/index')
// const route

const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
const port = 5000

Routes(app);
// Routes(app);
app.listen(port, () => {
  console.log(`Example app lissstening on  port ${port}`)
})