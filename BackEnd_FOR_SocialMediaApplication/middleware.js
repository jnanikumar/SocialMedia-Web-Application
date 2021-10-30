const jwt=require("jsonwebtoken")

module.exports=(req,res,next)=>{
    var token=req.header("x-token")
    if (!token){
        return res.send("token not found")
    }
    const decode=jwt.verify(token,"secretkey")
    req.currentuser=decode.currentuser
    next()
}