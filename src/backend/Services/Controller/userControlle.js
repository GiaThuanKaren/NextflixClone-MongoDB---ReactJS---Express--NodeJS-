const User = require("../Model/User");

class UserController {
  updateUser(req, res) {
    console.log(req.params.id);
    const itemBody=Object.keys(req.body)[0]
    console.log(Object.keys(req.body)[0])
    
    User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          ViewRecent:JSON.stringify(itemBody)
        },
      },
      { new: true }
    ).then(itemUpdate=>{
      console.log("Item Updated",itemUpdate)
    })
    .catch(e=>{
      console.log(e)
    })
  }
}

module.exports = new UserController();
