import React, { useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext'

export default function Login() {

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const { signup } = useAuth();
  const [ error, setError ] = useState('');
  const [ loading, setLoading ] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
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
    <button disabled={ loading } type="submit" >Sign Up</button>
    <br/>
    </form>
    <div className="toLogin">
    Already have an account? (link to login)
    </div>

    </div>
  )
}
