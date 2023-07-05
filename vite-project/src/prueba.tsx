import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserComponent = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users/users/1');
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>{user.name}</p>
      <p>{user.email}</p>
      
    </div>
  );
};

export default UserComponent;