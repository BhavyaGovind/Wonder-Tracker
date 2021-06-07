import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Profile from './profile';

export default function Dashboard() {
  const [ error, setError ] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <h2> Profile </h2>
      { error && <p>{error}</p> }
      <strong> "Email: " </strong> { currentUser.email }
      <Link to="/update-profile">
        Update Profile
      </Link>
      <Profile />
      <button onClick={ handleLogout }> Logout </button>
    </>
  )
}
