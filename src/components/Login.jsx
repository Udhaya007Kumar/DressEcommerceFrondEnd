import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginUserMutation  } from '../redux/features/auth/authApi';
import { setUser } from '../redux/features/auth/authSlice';




const Login = () => {
    const [message, setMessage] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
    
        const disptach = useDispatch();
        const [loginUser, { isLoading, error }] = useLoginUserMutation();
        const navigate = useNavigate()
        
        // handle login
        const handleLogin = async (e) => {
            e.preventDefault();
            const data = {
                email,
                password
            }
    
           try {
            
            const response = await loginUser(data).unwrap();
            console.log(response)
            const {token, user} = response;
            disptach(setUser({user}))
            alert("Login successful");
            navigate("/")
           } catch (error) {
            setMessage("Please provide a valid email and password")
           }
    
        }
    return (
        <section className="h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-center text-gray-700">Please Login</h2>
  
          <form onSubmit={handleLogin} className="space-y-5 mt-6">
            <div>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                required
                className="w-full bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 px-4 py-3 text-gray-700"
              />
            </div>
  
            <div>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 px-4 py-3 text-gray-700"
              />
            </div>
            {
                     message && <p className='text-red-500'>{message}</p>
             }
  
            <button
              type="submit"
              className="w-full bg-red-500 text-white font-medium py-3 rounded-md hover:bg-indigo-500 transition duration-300"
            >
              Login
            </button>
          </form>
  
          <p className="mt-5 text-sm text-center text-gray-600">
            Don't have an account? 
            <Link to="/register" className="text-red-500 font-medium hover:underline hover:text-indigo-600 px-1">Register</Link>
          </p>
        </div>
      </section>
    );
};

export default Login;