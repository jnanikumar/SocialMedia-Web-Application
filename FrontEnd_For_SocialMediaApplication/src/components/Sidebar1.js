import React,{useContext,useState} from 'react'
import {Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle} from "reactstrap"
import "./Sidebar1.css"
import { store } from '../App';

export default function Sidebar1() {
    const [token,setToken,currentBlur,setCurrentBlur,currentUser,setCurrentUser]=useContext(store)

    return (
        <div style={{width:"300px",border:"1px solid black",height:"400px",position:"fixed",borderRadius:"10%",backgroundColor:"whitesmoke"}} >
            <div className="container sidebar1">
                <div className="row">
                    <div className="col-12" style={{justifyContent:"center"}}>
                        <img src="my_photo.jpeg" style={{objectFit:"cover",borderRadius:"80%",margin:"15px 35px"}} height="200px" width="200px"/>
                        
                    </div>
                    <hr></hr>
                    
                </div>
                <div className="row">
                    <div className="col-12 name ">
                        {currentUser.name}
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 description ">
                        {currentUser.description}
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}
