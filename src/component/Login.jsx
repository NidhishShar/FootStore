import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import Navigation from './Navigation';

const LoginCard= () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', { email, password });
  };

  const Footer = () => (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">&copy; 2024 Lavesh & Malay. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://twitter.com/" className="hover:text-blue-400 transition-colors duration-300">Twitter</a>
          <a href="https://www.linkedin.com/in/lavesh-vyas/" className="hover:text-blue-400 transition-colors duration-300">LinkedIn</a>
          <a href="https://github.com/Lavesh20" className="hover:text-blue-400 transition-colors duration-300">GitHub</a>
        </div>
      </div>
    </footer>
  )

  return (
    <div>

    <Navigation/>
    <div className="login-container">
      <div className="login-box">
        {/* Header */}
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Please sign in to continue</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="form-group">
            <div className="input-icon">
              <Mail />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-group">
            <div className="input-icon">
              <Lock />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="password-toggle"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="form-extras">
            <div className="remember-me">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button type="submit" className="login-button">
            Sign in
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="signup-link">
          Don't have an account?{' '}
          <a href="#">Sign up</a>
        </p>
      </div>

      <style>{`
        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f5f5f5;
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .login-box {
          background-color: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
        }

        .login-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .login-header h2 {
          color: #333;
          font-size: 28px;
          margin: 0 0 8px 0;
        }

        .login-header p {
          color: #666;
          margin: 0;
        }

        .form-group {
          position: relative;
          margin-bottom: 20px;
        }

        .input-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #666;
          display: flex;
          align-items: center;
        }

        .form-group input {
          width: 80%;
          padding: 12px 40px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 16px;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus {
          outline: none;
          border-color: #4a90e2;
          box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
        }

        .password-toggle {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #666;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
        }

        .password-toggle:hover {
          color: #333;
        }

        .form-extras {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .remember-me {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .remember-me input[type="checkbox"] {
          width: 16px;
          height: 16px;
        }

        .remember-me label {
          color: #666;
          font-size: 14px;
        }

        .forgot-password {
          color: #4a90e2;
          text-decoration: none;
          font-size: 14px;
        }

        .forgot-password:hover {
          text-decoration: underline;
        }

        .login-button {
          width: 100%;
          padding: 12px;
          background-color: #4a90e2;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .login-button:hover {
          background-color: #357abd;
        }

        .signup-link {
          text-align: center;
          margin-top: 24px;
          color: #666;
          font-size: 14px;
        }

        .signup-link a {
          color: #4a90e2;
          text-decoration: none;
          font-weight: 600;
        }

        .signup-link a:hover {
          text-decoration: underline;
        }

        @media (max-width: 480px) {
          .login-box {
            padding: 24px;
          }

          .form-extras {
            flex-direction: column;
            gap: 16px;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
    <Footer/>
    </div>
  );
};

export default LoginCard;