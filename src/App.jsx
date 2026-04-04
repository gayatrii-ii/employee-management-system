import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Check if data already exists to avoid overwriting every reload
    if(!localStorage.getItem('employees')){
        setLocalStorage()
      
    }
  }, [])

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      console.log("This is admin")
      setUser('admin')
    } else if (email === 'user@me.com' && password === '123') {
      console.log("This is employee")
      setUser('employee')
    } else {
      alert("Invalid Credentials")
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard /> : (user === 'employee' ? <EmployeeDashboard /> : null)}
    </>
  )
}

export default App