const moongoose = require("mongoose");
const Schema = moongoose.Schema;
const User = new Schema({
    name:{type:String , required:true},
    Pass:{type:String , required:true},
});
module.exports = mongoose.model("User", User);