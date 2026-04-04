import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const submitHandler = (e) => {
    e.preventDefault()
    
    // Calling the function passed from App.jsx
    handleLogin(email, password)
    
    setEmail('')
    setPassword('')
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-zinc-900'>
      <div className='border-2 border-pink-300 p-8 rounded-xl'>
        <form 
          onSubmit={submitHandler} 
          className='flex flex-col space-y-4'
        >
          <input 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required
            className='text-white outline-none bg-transparent border-2 border-pink-400 py-2 px-6 rounded-full placeholder:text-gray-400 text-center' 
            type="email" 
            placeholder='Enter your email' 
          />
          
          <input 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required
            className='text-white outline-none bg-transparent border-2 border-pink-400 py-2 px-6 rounded-full placeholder:text-gray-400 text-center' 
            type="password" 
            placeholder='Enter password'
          />

          <button 
            type="submit"
            className='bg-pink-400 text-white font-semibold py-3 rounded-full hover:bg-pink-600 transition-all'
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login