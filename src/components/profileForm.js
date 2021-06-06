import React, {useState, useEffect } from 'react';


const ProfileForm = (props) => {

  const initialFieldValues = {
    fullName: '',
    contactNo: '',
    email: '',
    linkedIn: '',
    github: '',
    profileStatus: true
  }

  let [values, setValues] = useState(initialFieldValues);
  const [ loading, setLoading ] = useState(false);


  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(false);
  }
  const handleInputChange = e => {
    let { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  return (
    <div>
      <h1>This is Editable Profile Form</h1>
      <form onSubmit={ handleSubmit }>

      <label>Name
      <input type="text" name="name" value={values.name} placeholder="Bhavya Govind" onChange={handleInputChange} required/>
      </label>

      <label>Email
      <input type="text" name="email" value={values.email} placeholder="BG@ga.co" onChange={handleInputChange} required/>
      </label>

      <label>contactNo
      <input type="number" name="contact" value={values.contactNo} placeholder="**** *** ***" onChange={handleInputChange} />
      </label>

      <label>linkedIn
      <input type="email/text" name="linkedIN" value={values.linkedIn} placeholder="BG@ga.co" onChange={handleInputChange} />
      </label>

      <label>Github
      <input type="email/text" name="github" value={values.github} placeholder="BG@ga.co" onChange={handleInputChange} />
      </label>

      <button disabled={ loading } type="submit" onClick={ handleSubmit } > Update </button>

      </form>
    </div >
  )
}

export default ProfileForm
