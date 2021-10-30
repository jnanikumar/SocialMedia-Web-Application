import React,{useState,Component, useEffect,useContext} from 'react'
import axios from "axios"
import { Spinner } from 'reactstrap'
import { store } from '../App';





export default function Followers() {
    const [allusers,setAllusers]=useState([])
    const [token,setToken,currentBlur,setCurrentBlur,currentUser,setCurrentUser]=useContext(store)

    useEffect(()=>{
    axios.get(`http://localhost:8000/${currentUser._id}/getfollowers`)
        .then(users=>{
        setAllusers(users.data)
        
        })
    },[]
        
    )
    // useEffect(()=>{
    //     axios.get(`http://localhost:8000/getUsers`)
    //         .then(users=>{
    //         setAllusers(users.data)
            
    //         })
    //     },[]
            
    //     )

    // function addToFollowersList(id,name){
    //     axios.post(`http://localhost:8000/${currentUser._id}/addfollowing`,{
    //          username:name,
    //          userid:id
    //     })
    //     .then((user)=>{
    //         console.log(user)
    //     })
    //     // console.log(id._id)
    //     // console.log(name)
    //     // console.log(currentUser._id)
    // }
    // function deleteFromFollowersList(id,name){
    //     axios.post(`http://localhost:8000/${currentUser._id}/deletefollowing/${id}`)
    //     .then((user)=>{
    //         console.log(user)
    //     })
    //     // console.log(id._id)
    //     // console.log(name)
    //     // console.log(currentUser._id)
    // }

    // function addfollowers(id,name){
    //     axios.post(`http://localhost:8000/${currentUser._id}/addfollowers`,{
    //          username:name,
    //          userid:id
    //     })
    //     .then((user)=>{
    //         console.log(user)
    //     })
    //     // console.log(id._id)
    //     // console.log(name)
    //     // console.log(currentUser._id)
    // }


    
    return (
        <div className="row" style={{paddingLeft:"15px"}}>
            <p style={{fontWeight:"700",fontSize:"20px" ,margin:"10px"}}>Followers</p>.
             {allusers==[]?<Spinner/>:(

                                    
                                        
                                            
                allusers.map((user)=>{
                    // console.log(user.name)
                    return(
                    <div className="col-12" >
                <div>
                    <img src="my_photo.jpeg" style={{objectFit:"cover",borderRadius:"80%",margin:"10px 10px"}} height="40px" width="40px"/>
                    <span style={{fontWeight:"500",fontSize:"15px"}}>{user.username}</span>
                    {/* <button className="btn btn-secondary " style={{height:"30px",marginLeft:"3px"}} onClick={(e)=>addfollowers(user._id,user.name)}>follow</button> */}
                </div>
                <div>
                    
                </div>
                </div>)
                }))

                }

        </div>
    )
}



