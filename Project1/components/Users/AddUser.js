import React from 'react'

const AddUser = (props) => {

  const addUserHandler = (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" />
      <label htmlFor="age">Username</label>
      <input type="number" id="age" name="age" />
      <button type="submit">Add User</button>
    </form>
  )
}

export default AddUser