import React, { useState } from 'react'
import leftIcon from '../assets/leftIcon.svg'
import { useGlobalContext } from '../context'
import check from '../assets/check.svg'
import arrow from '../assets/arrowIcon.svg'
import deleteIcon from '../assets/delete.svg';


export default function StoreRivera() {

    const {addPage2,
        enabled,
        setEnabled,
        color1,
        color2,
        toggleColor1,
        toggleColor2,
        phoneNumbers,
        setPhoneNumbers,
        handlesubmit ,
        addInput,
        handleChange,
        removeInput

}=useGlobalContext()

   

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
            <button className='px-5 py-4 bg-slate-100 rounded-s-2xl rounded-e-2xl text-gray-400 font-semibold'>Сбросить</button>
            <button className='px-5 py-4 bg-slate-100 rounded-s-2xl rounded-e-2xl text-gray-400 font-semibold'>Сохранить</button>
            </div>
        </div>
        <hr />
        <div>
        <div className='flex gap-[150px] mt-8 '>
            <h1 className=' text-gray-500 font-semibold text-3xl'>Основные</h1>
            <div className='w-full'>
                <div className='flex gap-9 text-xl'>
                  <div className=''>
                    <h1 className='text-gray-500 font-semibold'>Наименование</h1>
                    <input type="text" className='focus:outline-none mt-3 px-8 w-[410px] border hover:border-blue-600 py-4 rounded-s-2xl rounded-e-2xl bg-slate-100' />
                  </div>
                  <div className=''>
                    <h1 className='text-gray-500 font-semibold'>Квадратура</h1>
                    <input className='focus:outline-none border hover:border-blue-600 mt-3 px-8 w-[410px] py-4 rounded-s-2xl rounded-e-2xl bg-slate-100 placeholder:text-right'
                     type="text"
                     placeholder='м2'
                    />
                  </div>
                </div>
                <div className='font-semibold text-xl'>
            <h1 className='text-gray-500 text-xl mt-8 mb-4'>Режим работы</h1>
                <div className=''>
                  <div className='flex items-center justify-between border mt-4 bg-slate-100 px-4 py-2.5 w-[855px] rounded-s-2xl rounded-e-2xl hover:border-blue-600'>
                    <h1 className='text-gray-500 w-36'>Понедельник</h1>
                    <div className='flex gap-20  mx-auto text-gray-400'>
                    <h1>Открытие: 8:00</h1>
                    <h1>Закрытие: 20:00</h1>
                    </div>
                    <button className='px-2 py-2'>
                    <div className="relative flex flex-col items-center justify-center overflow-hidden">
             <div className="flex">
                <label class="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={enabled}
                        readOnly
                        />
                    <div
                        onClick={() => {
                            setEnabled(!enabled);
                        }}
                        className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    ></div>
                    </label>
             </div>
             </div>
             </button>
                </div>
                <div className='flex items-center justify-between border mt-4 bg-slate-100 px-4 py-2.5 w-[855px] rounded-s-2xl rounded-e-2xl hover:border-blue-600'>
                    <h1 className='text-gray-500 w-36 '>Вторник</h1>
                    <div className='flex gap-20   text-gray-400'>
                    <h1>Открытие: 8:00</h1>
                    <h1>Закрытие: 20:00</h1>
                    </div>
                    <button className=' px-2 py-2'>
                    <div className="relative flex flex-col items-center justify-center overflow-hidden">
                <div className="flex">
                <label class="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={enabled}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            setEnabled(!enabled);
                        }}
                        className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    ></div>
                    </label>
                    </div>
                    </div>
                    </button>
                     </div>
                    <div className='flex items-center justify-between border mt-4 bg-slate-100 px-4 py-2.5 w-[855px] rounded-s-2xl rounded-e-2xl hover:border-blue-600'>
                    <h1 className='text-gray-500 w-36 '>Среда</h1>
                    <div className='flex gap-20  text-gray-400'>
                    <h1>Открытие: 8:00</h1>
                    <h1>Закрытие: 20:00</h1>
                    </div>
                    <button className=' px-2 py-2'>
                    <div className="relative flex flex-col items-center justify-center overflow-hidden">
            <div className="flex">
                <label class="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={enabled}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            setEnabled(!enabled);
                        }}
                        className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    ></div></label>
            </div>
        </div>
                    </button>
                </div>
                <div className='flex items-center justify-between border mt-4 bg-slate-100 px-4 py-2.5 w-[855px] rounded-s-2xl rounded-e-2xl hover:border-blue-600'>
                    <h1 className='text-gray-500 w-36 '>Четверг</h1>
                    <div className='flex gap-20  text-gray-400'>
                    <h1>Открытие: 8:00</h1>
                    <h1>Закрытие: 20:00</h1>
                    </div>
                    <button className=' px-2 py-2'>
                    <div className="relative flex flex-col items-center justify-center overflow-hidden">
            <div className="flex">
                <label class="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={enabled}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            setEnabled(!enabled);
                        }}
                        className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    ></div></label>
            </div>
        </div>
                    </button>
                </div>
                <div className='flex items-center justify-between border mt-4 bg-slate-100 px-4 py-2.5 w-[855px] rounded-s-2xl rounded-e-2xl hover:border-blue-600'>
                    <h1 className='text-gray-500 w-36 '>Пятница</h1>
                    <div className='flex gap-20  text-gray-400'>
                    <h1>Открытие: 8:00</h1>
                    <h1>Закрытие: 20:00</h1>
                    </div>
                    <button className=' px-2 py-2'>
                    <div className="relative flex flex-col items-center justify-center overflow-hidden">
            <div className="flex">
                <label class="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={enabled}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            setEnabled(!enabled);
                        }}
                        className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    ></div></label>
            </div>
        </div>
                    </button>
                </div>
                <div className='flex items-center justify-between border mt-4 bg-slate-100 px-4 py-2.5 w-[855px] rounded-s-2xl rounded-e-2xl hover:border-blue-600'>
                    <h1 className='text-gray-500 w-36 '>Суббота</h1>
                    <div className='flex gap-20  text-gray-400'>
                    <h1>Открытие: 8:00</h1>
                    <h1>Закрытие: 20:00</h1>
                    </div>
                    <button className=' px-2 py-2'>
                    <div className="relative flex flex-col items-center justify-center overflow-hidden">
            <div className="flex">
                <label class="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={enabled}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            setEnabled(!enabled);
                        }}
                        className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    ></div></label>
            </div>
        </div>
                    </button>
                </div>
                <div className='flex items-center justify-between border mt-4 bg-slate-100 px-4 py-2.5 w-[855px] rounded-s-2xl rounded-e-2xl hover:border-blue-600'>
                    <h1 className='text-gray-500 w-36 '>Воскресенье</h1>
                    <div className='flex gap-20  text-gray-400'>
                    <h1>Открытие: 8:00</h1>
                    <h1>Закрытие: 20:00</h1>
                    </div>
                    <button className=' px-2 py-2'>
                    <div className="relative flex flex-col items-center justify-center overflow-hidden">
            <div className="flex">
                <label class="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={enabled}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            setEnabled(!enabled);
                        }}
                        className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    ></div></label>
            </div>
        </div>
                    </button>
                </div>
                </div>
                </div>
                </div>
            </div>
            <hr className='my-10'/>
            <div className='flex mt-4 '>
               
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
                   
                   <button className=' px-2 py-2'>
                   <div className="relative flex flex-col items-center justify-center overflow-hidden">
            <div className="flex">
                <label class="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={enabled}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            setEnabled(!enabled);
                        }}
                        className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    ></div></label>
            </div>
        </div>
                   </button>
                  </div>
                </div>
                </div> 

            </div>
            <hr className='my-10'/>
            <div className='flex gap-[50px]'>
                <h1 className=' text-gray-500 font-semibold text-3xl'>Чек</h1>
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
                    <h1 className='font-semibold text-gray-500 mb-4 text-xl'>Телефоны</h1>
                <form action="" className='w-180' onSubmit={handlesubmit}>
                <div className='flex gap-8'>
                {phoneNumbers.map((phoneNumber, index) => (
          <div key={index} className='relative'>
            <input
              type="text"
              className='border w-[320px] px-4 py-4 bg-slate-100 focus:outline-none rounded-s-2xl rounded-e-2xl placeholder:font-semibold text-xl hover:border-blue-600'
              placeholder={`+998 (--) --- -- -- `}
              value={phoneNumber}
              onChange={(e) => handleChange(index, e.target.value)}
            />
            {index === 1 && (
              <button
                type="button"
                className='absolute top-2 right-2 px-4 py-4 '
                onClick={() => removeInput(index)}
              >
                <img src={deleteIcon} alt="delete" />
              </button>
            )}
          </div>
        ))}
                </div>
                    <button className=' border w-[320px] px-3 py-4 bg-slate-100 mt-4 rounded-s-2xl rounded-e-2xl text-blue-500 font-semibold text-xl hover:border-blue-600' onClick={addInput}>
                        + Добавить телефон
                   </button>
                </form>
                </div>



                <div className='flex gap-11 mt-11'>
                <div className='w-80'>
                   <h1 className='font-semibold text-gray-500 mb-4 text-xl'>Facebook</h1>
                        <input type="text" className='border w-full px-3 py-4 bg-slate-100 focus:outline-none rounded-s-2xl rounded-e-2xl placeholder:font-semibold text-xl hover:border-blue-600'
                        placeholder='Название страницы'/>
                   
                   <h1 className='font-semibold text-gray-500 mb-4 mt-8 text-xl'> Telegram</h1>
                    <input type="text" className='border w-full px-3 py-4 bg-slate-100 focus:outline-none rounded-s-2xl rounded-e-2xl placeholder:font-semibold text-xl hover:border-blue-600' 
                    placeholder='@ Юзернейм'/>
                    
                </div>
                <div className='w-80'>
                    <h1 className='font-semibold text-gray-500 mb-4 text-xl'>Instagram</h1>
                        <input type="text" className='border w-full px-3 py-4 bg-slate-100 focus:outline-none rounded-s-2xl rounded-e-2xl placeholder:font-semibold text-xl hover:border-blue-600'
                        placeholder='@ Юзернейм'/>
               
                    <h1 className='font-semibold text-gray-500 mb-4 mt-8 text-xl'>Сайт</h1>
                        <input type="text" className='border w-full px-3 py-4 bg-slate-100 focus:outline-none rounded-s-2xl rounded-e-2xl placeholder:font-semibold text-xl hover:border-blue-600'
                        placeholder='Ссылка на сайт'
                        />
                 
                </div>
                </div>
            </div>
            </div>
            <hr className='my-10' />
            <div className='flex'>
            <h1 className='w-[300px] text-gray-500 font-semibold text-3xl'>Реквизиты</h1>
            <div>
            <div className='flex justify-between text-xl w-[855px]'>
                <div className=''>
                    <h1 className='text-gray-500 font-semibold mb-4'>Магазин имеет уникальные реквизиты</h1>
                    <div className='w-[410px] border px-3 py-1 rounded-s-2xl rounded-e-2xl bg-slate-100 hover:border-blue-600'>
                     <div className='flex justify-between'>
                     <button className={`${color1 === "light" ? "bg-gray-100" : "bg-white"} bg-slate-100 text-gray-400 font-semibold px-20 py-2.5 rounded-s-xl rounded-e-xl`} onClick={toggleColor1} >Да</button>
                     <button  className={`${color2 === "light" ? "bg-white" : "bg-gray-100te"} bg-slate-100 text-gray-400 font-semibold  px-20 py-2.5 rounded-s-xl rounded-e-xl`} onClick={toggleColor2} >Нет</button>
                     </div>
                    </div>
                </div>
                <div className=''>
                    <h1 className='text-gray-500 font-semibold mb-4 '>Юридическое название компании</h1>
                    <input type="text" className='border w-[410px] px-4 py-4 rounded-s-2xl rounded-e-2xl bg-slate-100 focus:outline-none placeholder:font-semibold placeholder:text-xl placeholder:text-gray-400 hover:border-blue-600'
                    placeholder='Введите название' />
                </div>
                </div>
                <div className='w-[855px]'>
                    <h1 className='font-semibold text-gray-500 mb-4 mt-8 text-xl'>Юридический адрес</h1>
                    <input type="text" className='bg-slate-100 px-4 py-4 w-full rounded-s-2xl rounded-e-2xl border focus:outline-none placeholder:font-semibold placeholder:text-xl placeholder:text-gray-400 hover:border-blue-600'
                    placeholder='Город, район, улица, дом' />
                    <div className='flex gap-8 mt-8'>
                        <div className='w-full border px-4 py-4 flex justify-between rounded-s-2xl rounded-e-2xl bg-slate-100 hover:border-blue-600'>
                            <h1 className='text-xl font-semibold text-gray-500'>Узбекистан</h1>
                            <img src={arrow}alt="Arrow" className='rotate-[-90deg]'/>
                        </div>
                        <input type="text" className='px-4 py-4 border w-full rounded-s-2xl rounded-e-2xl bg-slate-100 focus:outline-none placeholder:font-semibold placeholder:text-xl placeholder:text-gray-400 hover:border-blue-600'
                        placeholder='Введите почтовый индекс'
                        />
                    </div>
                </div>
                <div>
                    <h1 className='font-semibold text-gray-500 mb-4 mt-8 text-xl'>Банковский счет</h1>
                    <form action="" className='w-[855px]'>
                        <input type="text" className='border-b-[1px] w-full rounded-t-2xl px-4 py-4 bg-slate-100 focus:outline-none placeholder:font-semibold placeholder:text-xl placeholder:text-gray-400'
                        placeholder='Введите банковский счет '
                        />
                        <input type="text" className='border-t-[1px] focus:outline-none w-full rounded-b-2xl px-4 py-4 bg-slate-100  placeholder:font-semibold placeholder:text-xl placeholder:text-gray-400'
                        placeholder='Название банка и филиал'
                        />
                    </form>
                    <button className='mt-8 w-full px-4 py-4 bg-slate-100 rounded-s-2xl rounded-e-2xl text-gray-400 font-semibold text-xl hover:border-blue-600 border'>+ Добавить еще один банковский счет</button>
                </div>
            </div>
            
            </div>
            <hr className='my-10' />
        </div>
    </div>
  )
}
