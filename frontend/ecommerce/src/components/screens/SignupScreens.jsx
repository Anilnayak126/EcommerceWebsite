

// RegisterForm.js
import React, { useState,useEffect } from 'react';
import {Link,useNavigate,useLocation, useLoaderData} from 'react-router-dom'
import {useDispatch,useSelector}from 'react-redux'
import { Signup } from '../../actions/userActions';




function SignupScreens() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password1: '',
    password2: ''
  });
  const [message,setMessage] = useState()
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const location = useLocation();
  const redirect = location.search?location.search.split("=")[1]:"/"
  const userSignup = useSelector((state) => state.userSignup)
  const {error,loading,userInfo} = userSignup;

  useEffect(()=>{
    if(userInfo){
      navigate('/Login')
    }

  },[userInfo,redirect])



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password1 !== formData.password2){
        setMessage('passwords do not match')
        navigate('/Signup')

    }
    else{
        dispatch(Signup(formData.firstName,formData.lastName,formData.email,formData.password1))
        setMessage("*Signup is success please activate ur account")
        navigate("/Login")
      
    }
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: '100%', maxWidth: '400px', borderRadius: '15px' }}>
        <h3 className="text-center mb-4">Register</h3>
        <p className='text-center text-danger'>{message}</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password1" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password1"
              name="password1"
              placeholder="Create a password"
              value={formData.password1}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password2" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="password2"
              name="password2"
              placeholder="Confirm your password"
              value={formData.password2}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3">Register</button>
        </form>
      </div>
    </div>
  );
}

export default SignupScreens;
