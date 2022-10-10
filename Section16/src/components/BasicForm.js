import React, { useState } from 'react';

import useInput from '../hooks/use-input2';

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameInputInvalid,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName
  } = useInput(value => value.trim() !== '')

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameInputInvalid,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName
  } = useInput(value => value.trim() !== '')

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailInputInvalid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(value => value.includes('@'))

  const formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault()

    if (!firstNameIsValid || !lastNameIsValid || !emailIsValid) {
      return
    }

    console.log("Submitted")
    console.log(firstName);
    console.log(lastName)
    console.log(email)

    resetFirstName();
    resetLastName();
    resetEmail();
  }

  const firstNameInputClasses =  firstNameInputInvalid
    ? 'form-control invalid'
    : 'form-control'

  const lastNameInputClasses = lastNameInputInvalid
    ? 'form-control invalid'
    : 'form-control'

  const emailInputClasses = emailInputInvalid
    ? 'form-control invalid'
    : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input value={firstName} type='text' id='name' onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler}/>
          {firstNameInputInvalid && <p className="error-text">Enter valid first name.</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input value={lastName} type='text' id='name' onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} />
          {lastNameInputInvalid && <p className='error-text'>Enter valid last name.</p>}        
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input value={email} type='text' id='name' onChange={emailChangeHandler} onBlur={emailBlurHandler} />
        {emailInputInvalid && <p className='error-text'>Enter valid E-Mail</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid} type="submit">Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
