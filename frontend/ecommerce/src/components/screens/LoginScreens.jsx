import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { userLoginReducers } from '../../reducers/userReducer';
import { Login } from '../../actions/userActions';

function LoginScreen() {
  const navigate = useNavigate();  
  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);  
    }
  }, [userInfo, redirect, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Login(formData.email, formData.password));
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: '100%', maxWidth: '400px', borderRadius: '15px' }}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="text"
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
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {error && <div className="alert alert-danger">{error}</div>} 
          <button type="submit" className="btn btn-primary w-100 mt-3">Login</button>
          
          <div className="text-center mt-3">
            <span>New user? </span>  
            <Link to="/Signup">Create an account</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
