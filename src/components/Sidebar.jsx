import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/billzLogo.svg'
import arrow from '../assets/arrowIcon.svg'
import setting from '../assets/settingIcon.svg'

export default function Sidebar({children}) {
  const menuItem=[
    
    {
      path:'/profile',
      name:'Профиль',
    },
    {
      path:'/company',
      name:'Компания',
    },
    {
      path:'/magazin',
      name:'Магазины',
    },
    {
      path:'/cash',
      name:'Кассы',
    },
    {
      path:'/check',
      name:'Чеки',
    },
    {
      path:'/currencies',
      name:'Валюты и оплата',
    },
    {
      path:'/products',
      name:'Товары',
    }
  ]
  return (
    <div className='container mx-auto'>
 <div className='flex'>
         <div className='w-80 bg-slate-50 h-screen  container'>
         <div className='flex items-center py-5 px-7'>
          <div>
          <div>
         <img src={Logo}/>
         </div>
         <div className='flex gap-4 mt-11 text-gray-500 text-base font-semibold'>
          <img src={arrow} />
          <img src={setting} />
          <h1>Настройки</h1>
         </div>
          </div>
         
         </div>
         {
         menuItem.map((item,index)=>(
         <NavLink className='text-gray-500 text-base mt-4' to={item.path} key={index}  >
         <div className='px-7 py-3 font-semibold hover:text-blue-600 hover:bg-gray-200 active:bg-gray-300 focus:bg-gray-200 focus:text-blue-600'>{item.name}</div>
         </NavLink>
         ))
         }
        <div className='flex gap-3 px-7 mt-20'>
         <button className='rounded-full bg-blue-600 text-white px-3 py-2'>ДО</button>
         <h1 className='text-gray-500 text-base font-semibold'>Достонхон Озодходжаев</h1>
        </div>
          </div>

          <main className='w-full p-5'>{children}</main>
          </div>
    </div>
        
    
    
  )
}
