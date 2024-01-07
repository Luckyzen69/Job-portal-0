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
          <p>company</p>
          <p>Gender</p>
          <p>Role</p>
          {/* Display other user information */}
        </div>
      )}
    </div>
    </>
 }