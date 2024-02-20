import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createUser, updateUser } from '../action/users';

function UserForm({ isEdit, initialUser }) {
  //console.log('initialUser',initialUser);
  const [user, setUser] = useState(isEdit ? initialUser : { name: '', email: '' });
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const handleChange = (event) => {
    const newId = Math.max(...users.map(user => user.id)) + 1;
    setUser({ ...user, id:newId, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(isEdit ? updateUser(user) : createUser(user));
    setUser({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
      />
      <button type="submit">{isEdit ? 'Update User' : 'Create User'}</button>
      </form>
  )
}


export default UserForm;