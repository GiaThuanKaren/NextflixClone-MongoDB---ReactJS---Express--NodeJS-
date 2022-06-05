const moongoose = require('mongoose')
const Schema = moongoose.Schema;
const User = new Schema(
  {
    Pass: { type: String,required:true},
    ViewRecent: { type: String,default:""},
    Email: { type: String,required:true },
    Plan: { type: String ,default:"Basic",required:true},
  },
  {
    timestamps: true,
  }
);
module.exports = moongoose.model("User", User);
