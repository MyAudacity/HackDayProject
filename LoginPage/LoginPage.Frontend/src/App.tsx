import { useEffect, useState } from 'react'
import './App.css'
import LoginPage from './components/LoginPage'
import { Users } from './types/stateTypes'

function App() {
  const [users, setUsers] = useState<Users>([])

  useEffect(() => {
    fetchUsers();
  }, [])

  const fetchUsers = () => {
    fetch('http://localhost:5076/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        console.log(data);
      })
      .catch(err => err);
  }

  return (
    <div className="App">
      <LoginPage users={users}/>
    </div>
  )
}

export default App
