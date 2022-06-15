const User = require("../Model/User");
const jwt = require("jsonwebtoken");
const Key = require("../../../util/Key");

class LoginController {

  login(req, res) {
    let get = JSON.parse(Object.keys(req.body)[0]);
    // console.log(get)

    User.findOne({ Email: get.Email })
      .then((items) => {
        console.log(items);
        if (items) {
          let password = items.Pass;
          if (items.Pass === get.pass) {
            const accesstoken = jwt.sign(
              {
                id: items._id,
              },
              Key.AccessSec,
              { expiresIn: Key.expiredToken }
            );
            items.Accesstoken.push(accesstoken);
            const UpdatedUser = new User(items);
            UpdatedUser.save()
              .then((itemUpdated) => {
                console.log(itemUpdated, "27");
                const { Pass,Accesstoken, ...others } = itemUpdated._doc;
                console.log(others);
                res.json({
                  code: 200,  
                  status: "Account Verfied",
                  payload: {
                    ...others,
                    ViewRecent: items.ViewRecent == "" ? [] : items.ViewRecent,
                  },
                  accesstoken: accesstoken,
                });
              })
              .catch((e) => {
                console.log("30", e);
              });
          } else
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
        console.log("Loi", e);
      });

    // console.log(req.body);
    console.log();
    // res.json({ data: req.body });
  }
}

module.exports = new LoginController();
