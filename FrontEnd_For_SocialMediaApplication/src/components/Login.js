import React,{useState,useContext} from 'react';
import axios from "axios"
import { store } from '../App';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import"./Login.css"
// import { store } from '../App';

import { Redirect } from 'react-router';
const Login = (props) => {
  const [token,setToken,currentBlur,setCurrentBlur,currentUser,setCurrentUser]=useContext(store)

  // const [token,setToken]=useContext(store)
  var [formData,setFormData]=useState({
    
    email:"",
    password:"",
   
  })

  
  function handleSubmit(e){
    e.preventDefault()
    axios.post("http://localhost:8000/login",formData)
    .then((info)=>{
      console.log(info)
      setCurrentUser(info.data[1])
      setToken(info.data[0].token)
      
    })
      

  }
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
    

  }
  if(token){
    return <Redirect to="myprofile"/>
  }
  return (
    <div className="container mt-5" >
    <p className="form-heading">Login</p>
    <Form className="col-12 col-md-6 mt-3" onSubmit={handleSubmit}> 
        
      <FormGroup>
        <Label for="Email">Email</Label>
        <Input type="email" name="email" id="Email" placeholder="Email" onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="Password">Password</Label>
        <Input type="password" name="password" id="Password" placeholder="password" onChange={handleChange} />
      </FormGroup>
      
      
      
      <br></br>
      <br></br>
      
      <div className="row">
        <Button className="col-3 col-md-2 ">Submit</Button>
        <p className="col-10">don't have an account? <a href="/signup" style={{fontWeight:"800",fontSize:"17"}}>signUp here</a></p>
      </div>
    </Form>
    </div>
  );
}

export default Login;




