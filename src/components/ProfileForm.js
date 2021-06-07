import React, { useState, useEffect } from 'react';

const ProfileForm = (props) => {
  const initialFieldValues = {
    fullName: '',
    mobile: '',
    email: '',
    linkedIn: '',
    github: ''
  }
  let [values, setValues] = useState(initialFieldValues);

  const handleInputChange = e => {
    var { name, value } = e.target;
    setValues({
        ...values,
        [name]: value
    })
  }
  const handleSubmit = () => {
    console.log("handle update Profile");
  }
  return (
    <div>
      <h2>Update Profile</h2>
      <form onSubmit={ handleSubmit }>

        <label> Full Name
        <input type="text" name="fullName" placeholder="Bhavya Govind" required/>
        </label>

        <br/>

        <label>Email
        <input type="text" name="email" placeholder="BG@ga.co" value={values.email} required/>
        </label>

        <br/>

        <label>Contact No.
        <input type="text" name="mobile" placeholder="**** *** ***" value={values.mobile} required/>
        </label>

        <br/>

        <label>linkedIn
        <input type="text/email" name="linkedIn" value={values.linkedIn} />
        </label>

        <br/>

        <label>Github
        <input type="text/email" name="github" value={values.github} />
        </label>

        <br/>

        <button type="submit" >
        Update Profile
        </button>
      </form>
    </div>
  )
}
export default ProfileForm;
