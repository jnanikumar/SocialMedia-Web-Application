import axios from 'axios';
import React,{useState} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import"./Login.css"
const SignUp = (props) => {
  var [formData,setFormData]=useState({
    name:"",
    email:"",
    password:"",
    description:""
  })
  function handleSubmit(e){
    e.preventDefault()
    axios.post("http://localhost:8000/signup",formData)
    .then((user)=>{
      alert(user.data[0].name)
      console.log(user)})


  }
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
    

  }
  return (
    <div className="container mt-5" >
        <p className="form-heading">SignUp</p>
    <Form className="col-md-6 mt-3" onSubmit={handleSubmit} > 
        <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" placeholder="your name" width="200px" onChange={handleChange}/>
      </FormGroup>
        
      <FormGroup>
        <Label for="Email">Email</Label>
        <Input type="email" name="email" id="Email" placeholder="Email" onChange={handleChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="Password">Password</Label>
        <Input type="password" name="password" id="Password" placeholder="password" onChange={handleChange}/>
      </FormGroup>
      
      
      <FormGroup>
        <Label for="description">Description</Label>
        <Input type="textarea" name="description" id="description" onChange={handleChange}/>
      </FormGroup>
      {/* <FormGroup>
        <Label for="exampleFile">File(choose your image)</Label><br></br>
        <Input type="file" name="file" id="exampleFile" />
        
      </FormGroup> */}
      <br></br>
      <br></br>
      <div className="row">
        <Button className="col-3 col-md-2 offset-1 offset-md-0">Submit</Button>
        <p className="col-10">Already have an account? <a href="/login" style={{fontWeight:"800",fontSize:"17"}}>Login here</a></p>
      </div>
      
    </Form>
    </div>
  );
}

export default SignUp;

