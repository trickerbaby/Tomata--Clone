import React,{useState} from 'react';
import './App.css';

function LoginForm({ onClose }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle login logic here
      // Example: You can make an API call to authenticate the user
  
      // Reset the form fields

      fetch('https://tomatobackend.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
      .then(response => response.json())
      .then(data => {
        // Handle the server response here
        // Example: You can update the UI to show a success or error message
      });

      setUsername('');
      setPassword('');
      
      // Close the login form
      onClose();
    };
  
    return (
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
  
  export default LoginForm;