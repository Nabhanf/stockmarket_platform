import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'
import { useNavigate } from 'react-router-dom';

function Customer_register() {
  const [User, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await axios.post('http://127.0.0.1:8000/register/', {
        Username: User, // Make sure the key is 'username', not 'Username'
        password: password,
      });
      console.log(response.data); // Log response from the backend

      navigate('/login');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
    <div className='page'>

      <form onSubmit={submit} className="registration-form">
        <div className="form-group">
          <label htmlFor="username">Enter a Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={User}
            onChange={(e) => setUser(e.target.value)}
            required
            />
        </div>
        <div className="form-group">
          <label htmlFor="password">Enter a Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
        </div>
        <button type="submit" className="submit-button">Register</button>
      </form>
            </div>
    </>
  );
}

export default Customer_register;
