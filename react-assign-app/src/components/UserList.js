import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser,createUser, updateUser, editUser } from '../action/users';
import { useState } from 'react';
import UserForm from './UserForm';

function UserList() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [editUserId, setEditUserId] = useState(null);

  const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

  const handleEditUser = (userId) => {
    const user = users.find(user => user.id === userId);
      setNewUser(user);
      setEditUserId(userId);
  };

  // const handleChange = (event) => {
  //   const newId = Math.max(...users.map(user => user.id)) + 1;
  //   setNewUser({ ...newUser, id:newId, [event.target.name]: event.target.value });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(newUser, editUserId)
  //   dispatch(editUserId ? editUser(newUser) : createUser(newUser));
  //   setNewUser({ name: '', email: '' });
  //   setEditUserId(null);
  //   dispatch(updateUser(newUser));
  // };


  return (
    <>
    <UserForm isEdit={editUserId} initialUser={newUser}/>
     <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              {/* <button onClick={() => handleEditUser(user.id)}>Edit</button> */}
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
}

export default UserList;
