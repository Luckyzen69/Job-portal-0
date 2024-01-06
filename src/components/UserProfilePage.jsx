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
          <p>Username: {user.username}</p>
          {/* Display other user information */}
        </div>
      )}
    </div>
    </>
 }