
import './App.css';
import react,{createContext,useState} from 'react';
import { Spinner } from 'reactstrap';
import { Redirect } from 'react-router';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import AddPost from './components/AddPost';
import Header from './components/Header';
import Login from './components/Login';
import Post from './components/Post';
import Sidebar1 from './components/Sidebar1';
import SignUp from './components/SignUp';
import Followers from './components/Followers';
import Main from './components/Main';

// import Spinner from './components/Spinner';
export const store=createContext();
function App() {

    
    const [token,setToken]=useState(null);
    const [currentBlur,setCurrentBlur]=useState({followers:false,followings:false,message:false})
    const [currentUser,setCurrentUser]=useState({name:"",description:""});
  return (
    <div>
      <store.Provider value={[token,setToken,currentBlur,setCurrentBlur,currentUser,setCurrentUser]}>
      <BrowserRouter>
          <Header style={{position:"fixed",top:"0"}}/>
          
        
          
        
      
          <Switch>
              <Route path="/myprofile" component={Main}/>
              <Route path="/login" component={Login}/>
              
              <Route path="/signup" component={SignUp}/>
              <Redirect to="/login"/>
          </Switch>
      </BrowserRouter>
      </store.Provider>
      
    </div>
  );
}

export default App;
