const mongoose=require("mongoose")

const Follower=mongoose.Schema({
    username:{
        type:String,
        required:true 
    },
    userid:{
        type:String,
        required:true
    }
})


const Following=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    userid:{
        type:String,
        required:true
    }
})

const Comment=mongoose.Schema({
    value:{
        type:String,
        required:true
    },
    data:{
        type:Date,
        default:Date.now
    }

})

const Post=mongoose.Schema({
    likes:[Follower],
    comments:[Comment]
})

const User=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        // required:true
    },
    password:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true

    },
    posts:[Post],
    followings:[Following],
    followers:[Follower],

})

module.exports=mongoose.model("user",User)