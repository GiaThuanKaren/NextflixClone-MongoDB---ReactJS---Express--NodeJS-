const User = require("../Model/User");

class regisController {
  regis(req, res) {
    let get = JSON.parse(Object.keys(req.body)[0]);
    User.findOne({ Email: get.Email })
      .then((items) => {
        if (items) {
          res.send({code:201, status: "Account already exist" });
        } else {
          const NewsUser = new User(get);
          NewsUser.save()
            .then((result) => {
              console.log("Insert succedd");
              res.send({code:200, status: "Insert succeed",payload:get });
            })
            .catch((e) => {
              console.log(e, "Can not insert new user");
            });
        }
      })
      .catch((e) => {
        console.log(e, "Loi");
      });
    console.log("Regis Route");
  }
}

module.exports = new regisController();
