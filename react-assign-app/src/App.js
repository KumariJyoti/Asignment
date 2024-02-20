import './App.css';
import React from 'react';
import {useEffect} from 'react';
import UserList from './components/UserList';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './action/users';


function App() {
  const dispatch = useDispatch();


  useEffect(()=>{
    fetchData();
  })

  const fetchData =   async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');

    const json = await data.json();
    //setUsers(json);
    dispatch(fetchUsers(json));
    
  }

  return (
     <div className="App">
      <h1>Hello in CREAD assignment</h1>
      <UserList />
    </div>

   
  );
}

export default App;
