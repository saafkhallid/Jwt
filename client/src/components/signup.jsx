import React,{useState} from "react";
import {Redirect} from 'react-router-dom'
import axios from 'axios'



 const SignUp=(props)=> {

     const initialState = {

        first_name : "",
        last_name : "",
        email:"",
        password:"",
        cin:"",
        phone: "",
        role : ""
     }


    const  [User,setlogin] = useState(initialState)


    const  handleChange = (e)=>{
       const {name,value} = e.target
       setlogin({...User,[name]:value})
     }

     const  handleClick =async(e)=>{
       e.preventDefault();
       console.log(User);
       const res = await axios.post('http://localhost:8000/api/signup',User)
       if(res) props.history.push('/')  
    
     }
  
     {

      
        return (

            <form className="form-name">
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>First name</label>
                    <input 
                     onChange={handleChange}
                    name="first_name"
                    type="text" 
                    className="form-control" 
                    placeholder="First name" 


                    />

                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input 
                    onChange={handleChange}
                    name="last_name"
                    type="text" 
                    className="form-control" 
                    placeholder="Last name" 

                    />
                </div>
                <div className="form-group">
                    <label>phone</label>
                    <input 
                    name="phone"
                    type="tel" 
                    className="form-control" 
                    placeholder="Enter phone"
                    onChange={handleChange}



                     />
                </div>
                <div className="form-group">
                    <label>cin</label>
                    <input 
                   name="cin"
                    type="text" 
                    className="form-control"
                     placeholder="Enter cin"
                     onChange={handleChange}


                      />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input 
                    name="email"
                    type="email"
                     className="form-control" 
                     placeholder="Enter email"
                     onChange={handleChange}


                     />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                    name="password"
                    type="password" 
                    className="form-control"
                    onChange={handleChange}
                    placeholder="Enter password" />
                </div>

                <div className="form-group">
                  <select className="custom-select" name="role" onChange={handleChange}>
                    <option>select client </option>
                    <option value="Admin"   
            >Admin</option>
                    <option value="User" 
            >Uesr</option> 
                    <option value="Tech"   
                >Technicien</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary btn-block"  onClick={handleClick} >Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}
export default SignUp