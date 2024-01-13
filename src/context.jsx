import React, { createContext, useContext, useState } from 'react'
import getStore from './utils/get'
import { useNavigate } from 'react-router-dom'


const UserContext = createContext()
export function UserProvider({ children }) {

  const id=new Date().getTime().toString().slice(-5,-1)

  
  const navigate=useNavigate();

  const [list,setList]=useState(getStore('lists'))
  const [user, setuser] = useState(getStore('users'))
  const [task, setTask] = useState('')
  const [password, setPassword] = useState('')
  const [pr,setPr]=useState("")
  const [store,setStore]=useState('');
  const [enabled, setEnabled] = useState(false);

 
 

const handleSubmit=(e)=>{
  e.preventDefault()
  const newItem = { title: task, password:password}
  setuser([...user, newItem])
  setPr({task:task,password:password})
  setTask('')
  setPassword('')
  navigate("/home")
};


const handleSubmit2 = (e) => {
  e.preventDefault()
  if (!store) {
    alert('bosh')
  } else {
    const newItem = { id: id, name: store }
    setList([...list, newItem]);
    setStore('');
  }
};

const removeItem = (id) => {
  const newItem = list.filter((item) => item.id !== id)
  setList(newItem)
};

const addPage=()=>{
navigate("/magazin/magazin")
}
  
  
  const addPage2=()=>{
    navigate('/magazin')
  }

  const handleCheckboxClick = () => {
    setEnabled(!enabled);
  };
  
  

  return (
    <UserContext.Provider
      value={{
        user,
        setuser,
        handleSubmit,
        task,
        setTask,
        password,
        setPassword,
        pr,
        setPr,
        store,
        setStore,
        list,
        setList,
        handleSubmit2,
        removeItem,
        addPage,
        addPage2,
        enabled,
        setEnabled,
        handleCheckboxClick
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useGlobalContext() {
  return useContext(UserContext)
}
