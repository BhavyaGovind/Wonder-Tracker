import React from 'react';
import { Link } from "react-router-dom";

const Profile = (users) => {
  return (
    <div>
      <h1>Name:</h1>
      <Link to="/ProfileForm">
        Update Profile
      </Link>
    </div>
  )
}

export default Profile;
