import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
  return <div className="d-flex"  style={{ position: 'absolute', bottom: '50px', width: '100%' }}>
      <div className="col-sm-6 offset-sm-3">
        <h1>Welcome to PopX</h1>
        <h3 style={{ color: 'gray' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
        <div className="d-flex flex-column gap-2 mt-3">
          <button onClick={() => navigate('/register')} className="btn btn-lg" style={{ backgroundColor: 'blue', color: 'white' }}>Create Account</button>
          <button onClick={() => navigate('/login')} className="btn btn-lg" style={{ backgroundColor: 'violet', color: 'white' }}>Already Registered? Login</button>
        </div>
      </div>
    </div>
  
};

export default Home;
