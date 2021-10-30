const express = require("express")
const mongoose=require("mongoose")
const User=require("./Models/Users")
const jwt=require("jsonwebtoken")
const middleware=require("./middleware")
const cors=require("cors")
const app=express()

app.use(cors({origin:"*"}))
app.use(express.json())
mongoose.connect("mongodb+srv://jnanikumar:Vadi1111@cluster0.bq5rq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(()=>{
    console.log("db connected")

})


app.post("/signup",async (req,res)=>{
    const {name,email,password,description}=req.body
    var newData=new User({name,email,password,description})
    await newData.save()
    res.json(await User.find({email}))
    res.end();
})

app.post("/login",async (req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email})
    console.log(user)
    if (!user){
        return res.send("user not found please check your email id")
    }
    if (password!=user.password){
        
        return res.send("password doesnot match")
    }
    const payload={
        currentuser:{
            id:user.id
        }
    }
    jwt.sign(payload,"secretkey",{expiresIn:3600000},(err,token)=>{

        if(err){
            console.log(err)
        }
        else{
            return res.json([{token},user])
        }
    })


})

app.get("/myprofile",middleware,async (req,res)=>{
    const user=await User.findById(req.currentuser.id)
    return res.json(user)

})


app.post("/:id/addfollowing",async (req,res)=>{  //people who he is following
    var user=await User.findById(req.params.id)
    console.log(user)
    
    user.followings.push(req.body)
    await user.save()
    res.json(user)
})

app.post("/:id/addfollowers",async (req,res)=>{
    var user=await User.findById(req.params.id)
    console.log(user)
    
    user.followers.push(req.body)
    await user.save()
    res.json(user)
})

app.delete("/:id/deletefollowing/:FollowingId",async (req,res)=>{
    var user=await User.findById(req.params.id)
    console.log(user)
    
    
    await user.followings.id(req.params.FollowingId).remove();
    
    await user.save()
    res.json(user.followings)
})

app.get("/:id/getfollowers",async (req,res)=>{
    var user=await User.findById(req.params.id)
    return res.json(user.followers)
})
app.get("/:id/getfollowings",async (req,res)=>{
    var user=await User.findById(req.params.id)
    return res.json(user.followings)
})

app.get("/getUsers",async (req,res)=>{
    return res.json(await User.find())

})




// app.post("/addFollower",async (req,res)=>{
//     const {}=req.body
//     const newData=new BrandName({Brand})
//     await newData.save()
//     res.json(await BrandName.find())
//     res.end();

// })

// app.get("/",async (req,res)=>{
//     res.json(await BrandName.find())
//     res.end();
    
// })

app.listen(8000,()=>{
    console.log("running on 8000 port")
})