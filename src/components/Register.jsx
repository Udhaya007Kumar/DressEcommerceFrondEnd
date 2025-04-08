import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation  } from '../redux/features/auth/authApi';
import { useDispatch } from "react-redux";


const Register = () => {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


   const disptach = useDispatch()
   const [registerUser, {isLoading}] = useRegisterUserMutation()
   const navigate = useNavigate()


  const handleRegister = async (e) => {
    e.preventDefault(); // Fixed: Prevent form from reloading

    const data = {
      username,
      email,
      password,
    }
    try {
      await registerUser(data).unwrap()
      alert("Register Sussfully")
      navigate("/login")
      
    } catch (error) {
      setMessage("Register Failed")
    }


  
  };

  return (
    <section className="h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Please Register</h2>

        <form onSubmit={handleRegister} className="space-y-5 mt-6">
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
            className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
            className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:ring-2 focus:ring-indigo-500"
          />

          {message && <p className="text-green-500 text-sm">{message}</p>}

          <button
            type="submit"
            className="w-full bg-red-500 text-white font-medium py-3 rounded-md hover:bg-indigo-500 transition duration-300"
          >
            Register
          </button>
        </form>

        <p className="mt-5 text-sm text-center text-gray-600">
          Already have an account?
          <Link to="/login" className="text-indigo-600 font-medium hover:underline px-1">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
