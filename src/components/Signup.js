import React, { useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from "react-router-dom";

export default function Signup() {

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const { signup } = useAuth();
  const [ error, setError ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault();

    if(passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/")
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false);
  }

  return (
    <div>
    <h2>SignUp</h2>
    { error && <p> { error } </p> }
    <form onSubmit={ handleSubmit }>

    <label>Name
    <input type="text" name="name"ref={nameRef} placeholder="Bhavya Govind" required/>
    </label>

    <br/>

    <label>Email
    <input type="text" name="email" ref={emailRef} placeholder="BG@ga.co" required/>
    </label>

    <br/>

    <label>Password
    <input type="password" name="password" ref={passwordRef} required/>
    </label>

    <br/>

    <label>Password Confirmation
    <input type="password" name="password-confirmation" ref={passwordConfirmationRef} required/>
    </label>

    <br/>

    <button disabled={ loading } type="submit" >
    Sign Up
    </button>

    <br/>

    </form>

    <div className="toLogin">
      Already have an account? <Link to="/login">Log In</Link>
    </div>

    </div>
  )
}
