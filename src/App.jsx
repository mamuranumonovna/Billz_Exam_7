import { useEffect } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import { useGlobalContext } from './context'
import Sidebar from './components/Sidebar'
import Profile from './pages/Profile'
import Company from './pages/Company'
import Magazin from './pages/Magazin'
import CashRegistr from './pages/CashRegistr'
import Checks from './pages/Checks'
import Currencies from './pages/Currencies'
import Products from './pages/Products'
import StoreRivera from './pages/StoreRivera'
import Toggle from './pages/Products'
import YourComponent from './pages/Profile'




function App() {

  const { user,list,theme } = useGlobalContext();

useEffect(()=>{
  localStorage.setItem('users', JSON.stringify(user))
  localStorage.setItem('lists', JSON.stringify(list))
  
},[user,list])

  return (
   <>
  <div className={`${theme==="light" ? "bg-white" : "bg-gray-800"}`}>
  <Sidebar>
   <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/profile' element={<YourComponent/>}/>
    <Route path='/company' element={<Company/>}/>
    <Route path='/magazin' element={<Magazin/>}/>
    <Route path='/cash' element={<CashRegistr/>}/>
    <Route path='/check' element={<Checks/>}/>
    <Route path='/currencies' element={<Currencies/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/magazin/magazin' element={<StoreRivera/>}/>
   </Routes>
   </Sidebar>
  </div>
   
   </>
  )
}

export default App
