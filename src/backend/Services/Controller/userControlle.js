const User = require("../Model/User");

class UserController {
  updateUser(req, res) {
    console.log(req.params.id,req.body);
    const itemBody=JSON.parse(Object.keys(req.body))
    console.log(JSON.parse(Object.keys(req.body)))
    
    User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          ViewRecent:itemBody
        },
      },
      { new: true }
    ).then(itemUpdate=>{
      console.log("Item Updated",itemUpdate)
      res.status(200).json({code:200,"message":"Update Completed"})
    })
    .catch(e=>{
      console.log(e)
    })
  }
}

module.exports = new UserController();
