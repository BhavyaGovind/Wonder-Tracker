import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

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
      <button onClick={ handleLogout }> Logout </button>
    </>
  )
}
