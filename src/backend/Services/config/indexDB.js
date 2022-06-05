const mongoose= require('mongoose');
async function Connect(){
    try{
        await mongoose.connect("mongodb://localhost:27017/NextflixClone");
        console.log("Connect Succeed 1");
    }catch(e){
        console.log("Connect Fail 1");
    }
}
module.exports = { Connect };
