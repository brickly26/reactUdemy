import React, { useState } from 'react'

import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css'

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
      console.log("one of these are empty")
    } 
    if (+enteredAge < 1) {
      console.log("age is less than 0")
    }
    props.onAddUser(enteredUsername, enteredAge)
    setEnteredAge('')
    setEnteredUsername('')
  }

  const userNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }
  

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" value={enteredUsername} onChange={userNameChangeHandler} />
        <label htmlFor="age">Age</label>
        <input type="number" id="age" name="age" value={enteredAge} onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser