import React from "react";
import axios from 'axios';

axios.defaults.withCredentials = true

     const Login=(props)=> {
      const initialState = {
        email: '',
        password:''
      }
      const [dataLogin,setDataLogin] = React.useState(initialState)
      const [error,setError] = React.useState('')
      const handelChange = (e)=>{
        const {name,value} = e.target
        setDataLogin({...dataLogin,[name]:value})
      }
      const handelSubmit= async (e)=>{

        e.preventDefault();
        try {
          const res = await axios.post('http://localhost:8000/api/signin',dataLogin,{
            withCredentials:true
          })
          if(res){
            if(res.data.isAuth && res.data.role === 'Admin') props.history.push('/admin')
            if(res.data.isAuth && res.data.role === 'User') props.history.push('/user')
            if(res.data.isAuth && res.data.role === 'Tech') props.history.push('/tech')
          }
        } catch (error) {
          error && setError(error.response.data);
        }
    
      }
   
    
       return (
            
            <form onSubmit={handelSubmit}>
                <h3>Sign In </h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"   onChange={handelChange}  />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"   onChange={handelChange} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1"  onChange={handelChange}  />
                        <label className="custom-control-label" htmlFor="customCheck1" >Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    
        }
    
export default Login