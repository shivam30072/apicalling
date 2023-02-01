import React from 'react'
import { useState, useEffect } from 'react'
import Content from './components/Content'
import Navbar from './components/Navbar'
import axios from 'axios'

const App = () => {

  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
      const response  = await axios.get('https://jsonplaceholder.typicode.com/users/');
        setUsers(response.data);
      
  }

  useEffect(() => {
    fetchUsers();
    console.log(users);
  }, [])

  return (
    <div>
      <Navbar />
      <Content users = {users} setUsers = {setUsers}/>
    </div>
  )
}

export default App