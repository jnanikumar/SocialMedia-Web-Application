import React, { useState ,useContext} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Tooltip,
  Button
} from 'reactstrap';
import { store } from '../App';
import "font-awesome/css/font-awesome.min.css"
import "./Header.css"
import { Redirect } from 'react-router';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [token,setToken,currentBlur,setCurrentBlur,currentUser,setCurrentUser]=useContext(store)
  const toggle = () => setIsOpen(!isOpen);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [avatartooltipOpen, setAvatarTooltipOpen] = useState(false);
  const logout=()=>{
    setToken(null);
    
  }

  function changeBlur(e){
        setCurrentBlur({followers:false,following:false,message:false})
        // setCurrentBlur({...currentBlur,[e.target.name]:false})
        setTimeout(()=>{
          setCurrentBlur({...currentBlur,[e.target.name]:true})
        },1000)

  }

  const toolTipToggle = () => setTooltipOpen(!tooltipOpen);
  const avatarToggle = () => setAvatarTooltipOpen(!avatartooltipOpen);
  
  if (token){

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/" style={{marginLeft:"30px"}}>SocialMedia</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
           <Nav style={{marginLeft:"auto"}} navbar>
           <NavItem>
                <input type="text" className="search" style={{width:"500px",margin:"10px 150px auto 50px ",height:"60%"}} placeholder="Search Here"/>
            </NavItem>
           <NavItem id="avatar">
              <NavLink href="#" className="nav-items" ><i class="fa fa-user" ></i></NavLink>
              <Tooltip placement="bottom" isOpen={avatartooltipOpen} target="avatar" toggle={avatarToggle}>
              jnani
              
              </Tooltip>
            </NavItem>
            
            
            <NavItem>
              <NavLink href="#" className="nav-items ">Message</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" name="followers"className="nav-items " onClick={changeBlur}>Followers</NavLink>
              {/* <button style={{backgroundColor:"inherit"}}>followers</button> */}
            </NavItem>
            <NavItem>
              <NavLink href="#" name="followings" className="nav-items " onClick={changeBlur}>Following</NavLink>
            </NavItem>
            
            <NavItem>
            {/* <i className="fa fa-plus fa-lg"></i> */}
              <NavLink href="#" className="nav-items plus" id="addPost"> Add Post</NavLink>
              <Tooltip placement="bottom" isOpen={tooltipOpen} target="addPost" toggle={toolTipToggle}>
              Add Post
              </Tooltip>
            </NavItem>
            
              <button className="btn btn-secondary" style={{height:"35px",margin:"auto"}} onClick={logout}>Logout</button>
            
            

            
          </Nav> 
          
          


          
        </Collapse>
      </Navbar>
    </div>
  );
}
  else{
    return(
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/" style={{marginLeft:"30px"}}>SocialMedia</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
           <Nav style={{marginLeft:"auto",marginRight:"20px"}} navbar >
           
            
            <NavItem>
              <NavLink href="/signup" className="nav-items ">SignUp</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login" className="nav-items ">Login</NavLink>
              
            </NavItem>
            
            
          </Nav> 
          
          


          
        </Collapse>
      </Navbar>
      
    </div>
    )

  }
}

export default Header;