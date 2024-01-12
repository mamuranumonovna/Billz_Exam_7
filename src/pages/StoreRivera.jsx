import React from 'react'
import leftIcon from '../assets/leftIcon.svg'
import { useGlobalContext } from '../context'
import check from '../assets/check.svg'

export default function StoreRivera() {
    const {addPage2}=useGlobalContext()
  return (
    <div>
        <div className='flex justify-between mt-11 mb-8 '>
            <div className='flex items-center gap-4  '>
                <button onClick={addPage2} className='px-3.5 py-2.5 bg-slate-100 border rounded-full'>
            <img  src={leftIcon} />
            </button>
            
            <h1 className='font-semibold text-4xl'><span className='text-gray-200 '>Магазин</span> Store Riviera</h1>
            </div>
            <div className='flex gap-4'>
            <button className='px-5 py-4 bg-slate-100 rounded-s-2xl rounded-e-2xl'>Сбросить</button>
            <button className='px-5 py-4 bg-slate-100 rounded-s-2xl rounded-e-2xl'>Сохранить</button>
            </div>

        </div>
        <hr />
        <div>
        <div className='flex mt-8 '>
            <h1 className='w-[400px] text-gray-500 font-semibold text-3xl'>Основные</h1>
            <div className='w-full'>
                <div className='flex gap-9 text-xl'>
                <div className=''>
                    <h1 className='text-gray-500 font-semibold'>Наименование</h1>
                    <input type="text" className='focus:outline-none mt-3 px-20 border hover:border-blue-600 py-4 rounded-s-2xl rounded-e-2xl bg-slate-100' />
                </div>
                <div className=''>
                    <h1 className='text-gray-500 font-semibold'>Квадратура</h1>
                    <input type="text" className='focus:outline-none border hover:border-blue-600 mt-3 px-20 py-4 rounded-s-2xl rounded-e-2xl bg-slate-100' />
                </div>
                </div>
                <div className='font-semibold text-xl'>
            <h1 className='text-gray-500 text-xl'>Режим работы</h1>
            
                <div className=''>
                <div className='flex items-center justify-between border mt-4 bg-slate-100 px-4 py-2.5 w-[855px] rounded-s-2xl rounded-e-2xl hover:border-blue-600'>
                    <h1 className='text-gray-500 w-36'>Понедельник</h1>
                    <div className='flex gap-20  mx-auto text-gray-400'>
                    <h1>Открытие: 8:00</h1>
                    <h1>Закрытие: 20:00</h1>
                    </div>
                    <button className='bg-sky-400 px-2 py-2'>bdwc</button>
                </div>
                <div className='flex items-center justify-between border mt-4 bg-slate-100 px-4 py-2.5 w-[855px] rounded-s-2xl rounded-e-2xl hover:border-blue-600'>
                    <h1 className='text-gray-500 w-36 '>Вторник</h1>
                    <div className='flex gap-20   text-gray-400'>
                    <h1>Открытие: 8:00</h1>
                    <h1>Закрытие: 20:00</h1>
                    </div>
                    <button className='bg-sky-400 px-2 py-2'>bdwc</button>
                </div>
                <div className='flex items-center justify-between border mt-4 bg-slate-100 px-4 py-2.5 w-[855px] rounded-s-2xl rounded-e-2xl hover:border-blue-600'>
                    <h1 className='text-gray-500 w-36 '>Среда</h1>
                    <div className='flex gap-20  text-gray-400'>
                    <h1>Открытие: 8:00</h1>
                    <h1>Закрытие: 20:00</h1>
                    </div>
                    <button className='bg-sky-400 px-2 py-2'>bdwc</button>
                </div>
                <div className='flex items-center justify-between border mt-4 bg-slate-100 px-4 py-2.5 w-[855px] rounded-s-2xl rounded-e-2xl hover:border-blue-600'>
                    <h1 className='text-gray-500 w-36 '>Четверг</h1>
                    <div className='flex gap-20  text-gray-400'>
                    <h1>Открытие: 8:00</h1>
                    <h1>Закрытие: 20:00</h1>
                    </div>
                    <button className='bg-sky-400 px-2 py-2'>bdwc</button>
                </div>
                <div className='flex items-center justify-between border mt-4 bg-slate-100 px-4 py-2.5 w-[855px] rounded-s-2xl rounded-e-2xl hover:border-blue-600'>
                    <h1 className='text-gray-500 w-36 '>Пятница</h1>
                    <div className='flex gap-20  text-gray-400'>
                    <h1>Открытие: 8:00</h1>
                    <h1>Закрытие: 20:00</h1>
                    </div>
                    <button className='bg-sky-400 px-2 py-2'>bdwc</button>
                </div>
                <div className='flex items-center justify-between border mt-4 bg-slate-100 px-4 py-2.5 w-[855px] rounded-s-2xl rounded-e-2xl hover:border-blue-600'>
                    <h1 className='text-gray-500 w-36 '>Суббота</h1>
                    <div className='flex gap-20  text-gray-400'>
                    <h1>Открытие: 8:00</h1>
                    <h1>Закрытие: 20:00</h1>
                    </div>
                    <button className='bg-sky-400 px-2 py-2'>bdwc</button>
                </div>
                <div className='flex items-center justify-between border mt-4 bg-slate-100 px-4 py-2.5 w-[855px] rounded-s-2xl rounded-e-2xl hover:border-blue-600'>
                    <h1 className='text-gray-500 w-36 '>Воскресенье</h1>
                    <div className='flex gap-20  text-gray-400'>
                    <h1>Открытие: 8:00</h1>
                    <h1>Закрытие: 20:00</h1>
                    </div>
                    <button className='bg-sky-400 px-2 py-2'>bdwc</button>
                </div>
                </div>
                </div>
                </div>
            </div>
            <hr className='my-10'/>
            <div className='flex mt-4 items-center'>
               
                    <h1 className='w-[300px] text-gray-500 font-semibold text-3xl'>Кассы</h1>
                <div>
                    <hr className='w-[855px]'/>
                    <div className='flex justify-between w-[755px] px-4 py-3 text-gray-400 font-semibold text-xl'>
                        <h1>Касса</h1>
                        <h1>Статус</h1>
                    </div>
                    <hr className='w-[855px]' />
                    <div className=' border mt-4 bg-slate-100 px-4 py-2.5 w-[855px] rounded-s-2xl rounded-e-2xl hover:border-blue-600'>
                  <div className='flex items-center justify-between w-[725px]'>
                  <h1 className='text-gray-500 text-xl font-semibold '>Cashbox Riviera</h1>
                   
                   <button className='bg-sky-400 px-2 py-2'>bdwc</button>
                  </div>
                </div>
                </div> 

            </div>
            <hr className='my-10'/>
            <div className='flex'>
                <h1 className='w-[300px] text-gray-500 font-semibold text-3xl'>Чек</h1>
                <div className='flex'>
                  <img src={check} alt="Check" />
                  <img src={check} alt="Check" />
                  <img src={check} alt="Check" />
                </div>
            </div>
            <hr className='my-10' />
            <div className='flex'>
            <h1 className='w-[300px] text-gray-500 font-semibold text-3xl'>Контакты</h1>
            <div>
                <div>
                    <h1>Телефоны</h1>
                <form action="" className='w-80'>
                    <input type="text" className='w-full px-3 py-4 bg-slate-100 focus:outline-none rounded-s-2xl rounded-e-2xl'/>
                    <button className='w-full px-3 py-4 bg-slate-100 mt-4 rounded-s-2xl rounded-e-2xl'>
                        + Добавить телефон
                   </button>
                </form>
                </div>
                <div className='flex gap-11'>
                <div className='w-80'>
                   <h1>Facebook</h1>
                        <input type="text" className='border w-full px-3 py-4 bg-slate-100 focus:outline-none rounded-s-2xl rounded-e-2xl'/>
                   
                   <h1> Telegram</h1>
                    <input type="text" className='border w-full px-3 py-4 bg-slate-100 focus:outline-none rounded-s-2xl rounded-e-2xl' />
                    
                </div>
                <div className='w-80'>
                    <h1>Instagram</h1>
                        <input type="text" className='border w-full px-3 py-4 bg-slate-100 focus:outline-none rounded-s-2xl rounded-e-2xl'/>
               
                    <h1>Сайт</h1>
                        <input type="text" className='border w-full px-3 py-4 bg-slate-100 focus:outline-none rounded-s-2xl rounded-e-2xl' />
                 
                </div>
                </div>
            </div>
            </div>
            <hr className='my-10' />
            <div className='flex'>
            <h1 className='w-[300px] text-gray-500 font-semibold text-3xl'>Реквизиты</h1>
            <div className='flex gap-9 text-xl '>
                <div className=''>
                    <h1 className='text-gray-500 font-semibold'>Магазин имеет уникальные реквизиты</h1>
                    <div className='focus:outline-none border hover:border-blue-600 mt-3 px-20 py-4 rounded-s-2xl rounded-e-2xl bg-slate-100 flex gap-4'>
                     <button className='px-[50px] bg-violet-500'></button>
                     <button className='px-[50px] py-3 bg-violet-500'></button>
                    </div>
                </div>
                <div className=''>
                    <h1 className='text-gray-500 font-semibold'>Юридическое название компании</h1>
                    <input type="text" className='focus:outline-none border hover:border-blue-600 mt-3 px-20 py-4 rounded-s-2xl rounded-e-2xl bg-slate-100' />
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
