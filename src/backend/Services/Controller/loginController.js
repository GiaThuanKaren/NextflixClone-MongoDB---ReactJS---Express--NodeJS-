const User = require("../Model/User");

class LoginController {
  login(req, res) {
    let get = JSON.parse(Object.keys(req.body)[0]);
    // console.log(get)

    User.findOne({ Email: get.Email })
      .then((items) => {
        console.log(items);
        if (items) {
          let password = items.Pass;
          if (items.Pass === get.pass)
            res.json({
              code: 200,
              status: "Account Verfied",
              payload: {
                  ...get,
                  ViewRecent: items.ViewRecent =='' ? [] : items.ViewRecent,
              },
            });
          else
            res.json({
              code: 404,
              status: "Email Or Password doesnt't correct",
            });
        } else {
          res.json({
            code: 404,
            status: "Account doest't exist",
          });
        }
      })
      .catch((e) => {
        console.log("Loi");
      });

    // console.log(req.body);
    console.log();
    // res.json({ data: req.body });
  }
}

module.exports = new LoginController();
