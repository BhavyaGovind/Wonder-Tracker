import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function ForgotPassword() {

  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [ error, setError ] = useState("");
  const [ message, setMessage ] = useState("");
  const [ loading, setLoading ] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false)
  }

  return (
    <>
      <h2>Password Reset</h2>

      { error && <p>{ error }</p> }
      { message && <p>{ message }</p>}

      <form onSubmit={ handleSubmit }>
        <label>
        Email:
        <input type="text" name="email" ref={ emailRef } required />
        </label>

        <button disabled={ loading } type="submit"> Reset Password </button>
      </form>

      <div>
      <Link to="/login"> Login </Link>
      </div>

      <div>
        Need an account?
        <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}
