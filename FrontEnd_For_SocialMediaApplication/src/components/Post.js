import React from 'react'
import "./Post.css"
export default function Post() {
    return (
        <div className="PostMain container " style={{height:"560px",width:"700px",border:"1px solid black",padding:"10px 0"}}>
            <div className="col-12" >
                <div>
                    <img src="my_photo.jpeg" style={{objectFit:"cover",borderRadius:"80%",margin:"15px 35px"}} height="50px" width="50px"/>
                    <span style={{fontWeight:"800",fontSize:"17px"}}>Vadigalla Jnani Kumar</span><button className="btn btn-secondary " style={{height:"35px",marginLeft:"5px"}}>follow</button>
                </div>
                <div>
                    
                </div>
            </div>
            
            <div className="col-12" >
                <img src="my_photo.jpeg" style={{objectFit:"cover"}} height="80%" width="100%"/>
            </div>
            <hr></hr>
            <div className="col-12">
            <i class="fa fa-heart fa-lg"></i>
            <i class="fa fa-comment fa-lg"></i>
            <i class="fa fa-share fa-lg"></i>
            </div>
            
            
        </div>
    )
}
