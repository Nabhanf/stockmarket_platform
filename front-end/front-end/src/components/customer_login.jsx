import React, { useState } from 'react';
import axios from 'axios';

function Customer_login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/login/', {
        Username: username,
        password: password,
      });
      
      console.log(response.data); 
      
    
    } catch (error) {
      console.error('Error:', error);
    }

  
    setUsername('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={styles.input}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
      </div>
      <button type="submit" style={styles.button}>Login</button>
    </form>
  );
}

// Define styles object
const styles = {
  form: {
    maxWidth: '300px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  input: {
    width:'250px',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '3px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
};

export default Customer_login;
