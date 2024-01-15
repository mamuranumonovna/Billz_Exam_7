import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/billzLogo.svg'
import arrow from '../assets/arrowIcon.svg'
import setting from '../assets/settingIcon.svg'
import { useGlobalContext } from '../context'

export default function Sidebar({children}) {
  const {ToggleTheme,theme}=useGlobalContext()
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
    <div className=''>
 <div className='flex'>
         <div className={`w-96 ${theme==='dark' ? 'bg-gray-700':'bg-slate-50'} h-screen fixed container`}>
         <div className='flex items-center py-5 px-7'>
          <div>
          <label className="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={theme === 'dark' ? true : false}
                        readOnly
                        />
                    <div
                        onClick={ToggleTheme}
                        className={`${theme==='dark'?'bg-gray-500':'bg-gray-200'} w-11 h-6  rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600`}
                    ></div>
                    <h1 className={`${theme==='dark'?'text-white':'text-gray-500'} ml-4 text-lg font-semibold`}>{theme === 'light' ? 'Dark mode' : 'Light mode'}</h1>
                    </label>
            
          <div className='mt-14'>
         <img src={Logo}/>
         </div>
         <div className='flex gap-4 mt-16 text-gray-500 text-base font-semibold'>
          <img src={arrow} />
          <img src={setting} />
          <h1 className={`${theme==='dark'? 'text-white':'text-gray-500'}`}>Настройки</h1>
         </div>
          </div>
         
         </div>
         {
         menuItem.map((item,index)=>(
         <NavLink className='text-gray-500  mt-4 text-xl' to={item.path} key={index}  >
         <div className={`px-7 py-3 font-semibold hover:text-blue-600 hover:bg-gray-200 active:bg-gray-300 focus:bg-gray-200 focus:text-blue-600 ${theme==='dark'? 'text-white':'text-gray-500'}`}>{item.name}</div>
         </NavLink>
         ))
         }
        <div className='flex gap-3 px-7 mt-20 items-center'>
         <button className='rounded-full bg-blue-600 text-white px-3 py-3'>ДО</button>
         <h1 className={`text-gray-500 text-base font-semibold ${theme==='dark'? 'text-white':'text-gray-500'}`}>Достонхон Озодходжаев</h1>
        </div>
          </div>

          <main className='w-full p-5 ml-[390px]'>{children}</main>
          </div>
    </div>
        
    
    
  )
}
