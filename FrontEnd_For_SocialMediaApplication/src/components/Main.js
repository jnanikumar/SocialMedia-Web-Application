
import { store } from '../App';
import react,{useContext,useEffect} from 'react';
import { Spinner } from 'reactstrap';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import AddPost from './AddPost';
import Header from './Header';
import Login from './Login';
import Post from './Post';
import Sidebar1 from './Sidebar1';
import SignUp from './SignUp';
import Followers from './Followers';
import Followings from './Followings';
import {Redirect} from "react-router"
import axios from 'axios';

function Main() {
    const [token,setToken,currentBlur,setCurrentBlur,currentUser,setCurrentUser]=useContext(store)
    useEffect(() => {
        axios.get("http://localhost:8000/myprofile",{
            headers:{
                "x-token":token
            }
        })
        .then((user)=>{
            setCurrentUser(user.data)
        })
        
    }, [])
   
    if (token){
    
  return (
    <>
    
      
      
      
    
      
                <div className="container" style={{margin:"30px 0 0 30px",padding:"0"}}>
                <div className="row">
                    <div class="col-3">
                    <Sidebar1/>

                    </div>
                    <div className="col-7 ">
                        <div className="scroll-bar"style={{height:"590px" ,width:"722px",overflow:"auto"}}>
                        <Post/>
                        <Post/>
                    </div>

                    </div>
                    <div className="col-2">
                    <div className="scroll-bar" style={{height:"590px" ,width:"450px",overflowY:"auto",overflowX:"hidden"}}>
                    {/* <BrowserRouter>
                        <Switch>
                        
                        <Route path="/followers" component={Followers}/>
                        <Route path="/followings" component={Followers}/>
                        <Redirect to="/followers" component={Followers}/>
                        
                        </Switch>
                    </BrowserRouter> */}

                    {currentBlur.followers?<Followers/>:<div></div>}
                    {currentBlur.followings?<Followings/>:<div></div>}
                    


                   
                    </div>

                    </div>
                </div>
                

            </div>
            
      
     

      
    </>
  );
    }
    else{
        return(
        <Redirect to="/login"/>
        )
    }
}

export default Main;
