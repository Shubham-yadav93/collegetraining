import{ useState, useEffect } from 'react';

function LoginPage() {
  // States for managing username, password, error
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Predefined correct credentials
  const correctUsername = 'Shubham';
  const correctPassword = '12345';

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload

    if (username === correctUsername && password === correctPassword) {
      alert('Login successful!');
      setError('');
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };

  // Reset form fields
  const handleReset = () => {
    setUsername('');
    setPassword('');
    setError('');
  };


  // UseEffect for a welcome message when the component mounts
  useEffect(() => {
    console.log('Welcome to the Login Page!');
  }, []); // Runs only once when the component is mounted

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        {/* Username Input */}
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </label>
        </div>
        {/* Password Input */}
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </label>
        </div>
        {/* Buttons */}
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
      {/* Error message */}
      {error && <p>{error}</p>}
    </div>
  );
}

export default LoginPage;