import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  // Fetch users from the API when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);  // Store fetched users in the state
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>Username:</strong> {user.username} - <strong>Name:</strong> {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;