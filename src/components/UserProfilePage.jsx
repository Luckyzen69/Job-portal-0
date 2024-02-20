import React from 'react';

export default function UserProfilePage(){
    const user = req.body.user
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