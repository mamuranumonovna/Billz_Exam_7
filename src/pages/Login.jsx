import React from 'react'
import { useGlobalContext } from '../context'

export default function Login() {
    const { task,setTask,password,setPassword,handleSubmit } = useGlobalContext()
  return (
    
         <div className='flex justify-center items-center h-screen bg-gray-400'>
      <div className='w-[500px] p-6 shadow-lg bg-white rounded-md'>
        <h1 className='text-3xl block text-center font-semibold'>Login</h1>
      
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="email" className='block text-base mb-1'>Email</label>
        <input className=' rounded-md border w-full text-base px-2 py-2 focus:outline-none focus:ring-0 focus:border-gray-400'
        type="text"
        id='email'
        value={task}
        onChange={(e)=>{setTask(e.target.value.trim())}}
        required
        placeholder='enter your email...'
        />
        <label htmlFor="password" className='block text-base mb-1 mt-2'>Password</label>
        <input className=' rounded-md border w-full text-base px-2 py-2 focus:outline-none focus:ring-0 focus:border-gray-400'
         type="text"
         id='password'
         value={password}
         onChange={(e)=>setPassword(e.target.value.trim())}
         required
         placeholder='enter your password...'
         />
        <button className='block rounded-md mx-auto border-2 border-indigo-700 bg-indigo-700 text-white py-2 px-5 mt-4' >Login</button>
      </form>
      </div>
    </div>
    
  )
}
