import React from 'react';
import { useAuth } from '../auth/authProvider';

export default function UserProfilePage(){
    const { user } = useAuth();
    return <>
    <div>
      <h2>User Profile</h2>
      {user && (
        <div>
          <p>User ID: </p>
          <input type="image" />
          
          <p className='border rounded'>Username: {user.username}</p>
          <p>company {user.company}</p>
          <p>Gender{user.gender}</p>
          <p>Role{user.role}</p>
          {/* Display other user information */}
        </div>
      )}
    </div>
    </>
 }