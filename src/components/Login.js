import React, { useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from "react-router-dom"



export default function Login() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [ error, setError ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/")
    } catch {
      setError('Failed to log in ');
    }
    setLoading(false);
  }

  return (
    <div>
    <h2> Log In </h2>
    { error && <p> { error } </p> }
    <form onSubmit={ handleSubmit }>

    <label>
    Email:
    <input type="text" name="email" ref={emailRef} placeholder="BG@ga.co" required/>
    </label>

    <br/>

    <label>
    Password:
    <input type="password" name="password" ref={passwordRef} required/>
    </label>

    <br/>

    <button disabled={ loading } type="submit" >
    Log In
    </button>

    <br/>

    </form>

    <div className="toSignup">
    Need an account?
    <Link to="/signup">
    Sign Up
    </Link>
    </div>

    </div>
  )
}
