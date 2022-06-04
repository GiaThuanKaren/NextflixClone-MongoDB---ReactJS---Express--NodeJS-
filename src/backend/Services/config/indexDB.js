const mongoose= require('mongoose');
async function Connect(){
    try{
        await mongoose.connect("mongodb://localhost:27017/NextflixClone");
        console.log("Connect Succeed");
    }catch(e){
        console.log("Connect Fail");
    }
}
module.exports = { Connect };
