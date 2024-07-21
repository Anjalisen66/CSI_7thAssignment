import React from 'react';
import LoginForm from './Login';
import SignUpForm from './Signup';
import { useState } from 'react';
import './overlay.css';

const ImageOverlay = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(prevState => !prevState);
      };

    return (
        <div className="image-overlay-container">
            <img src="https://wallpapers.com/images/hd/grocery-items-scatter-w04jzec7gqgm568k.jpg" alt="Background" className="background-image" />
            <div className="overlay">
            {isLogin ? <LoginForm /> : <SignUpForm />}
        <button onClick={toggleForm} className="toggle-button">
          {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
        </button>
            </div>
        </div>
    );
};

export default ImageOverlay;
