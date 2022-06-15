const User = require("../Model/User");

class UserController {
  updateUser(req, res) {
    console.log(req.body)
    res.send("Update User Info")
  }
}


module.exports = new UserController()
