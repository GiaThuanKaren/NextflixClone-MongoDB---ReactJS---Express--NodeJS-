class LoginController{
    regis(req,res){
        console.log(req.hostname);
        console.log(req.body);
        console.log(JSON.parse(Object.keys(req.body)[0]) );
        res.json({data : req.body})
    }
}

module.exports= new LoginController;