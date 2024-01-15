import React, { useState } from 'react'
import leftIcon from '../assets/leftIcon.svg'
import { useGlobalContext } from '../context'
import check from '../assets/check.svg'
import arrow from '../assets/arrowIcon.svg'
import deleteIcon from '../assets/delete.svg';
import Home from "./Home.jsx";
import {list} from "postcss";
import {useNavigate} from "react-router-dom";


export default function StoreRivera() {
   
    const {addPage2,
        enabled,
        setEnabled,
        color1,
        color2,
        toggleColor1,
        toggleColor2,
        phoneNumbers,
        handlesubmit ,
        addInput,
        handleChange,
        removeInput,
        handlesubmit2,
        removeInput2 ,
        addInput2,
        handleChange2,
        bankAccounts,
        setStore,
        store,
        handleSave,
        theme,
        monday,
        setMonday,
        tuesday,
        setTuesday,
        wednesday,
        setWednesday,
        thursday,
        setThursday,
        friday,
        setFriday,
        saturday,
        setSaturday,
        sunday,
        setSunday,
        kvadrat, 
        setKvadrat,
        davlat,
         setDavlat,
         telegramUsername,
         setTelegramUsername,
         InstagramUsername,
         setInstagramUsername,
         facebookUsername,
        setFacebookUsername,
        siteLink,
         setSiteLink,
         name,
         setName,
         emailIndex,
          setEmailIndex,
         bank,
          setBank,
          addLocalStorage,
          checks,
          handlesubmit3
          

}=useGlobalContext()

 


  return (
    <div>
        <div className='flex justify-between mt-11 mb-8 '>
            <div className='flex items-center gap-4  '>
            <button onClick={addPage2} className={`${theme==='dark'?'bg-gray-700':'bg-gray-200'}  px-3.5 py-2.5   rounded-full`}>
            <img   src={leftIcon} />
            </button>
            <h1 className={`font-semibold text-4xl ${theme==='dark'?'text-white':'text-black'}`}><span className={`${theme==='dark'?'text-gray-50':'text-gray-300'}`}>Магазин</span> Store Riviera</h1>
            </div>
            <div className='flex gap-4'>
            <button className={`${theme==='dark' ? 'bg-gray-700':'bg-slate-100'}  px-5 py-4  rounded-s-2xl rounded-e-2xl text-gray-400 font-semibold`}>Сбросить</button>
            <button disabled={!checks} onClick={addLocalStorage} className={` ${checks ? 'bg-blue-500' : 'bg-gray-700'} px-5 py-4  rounded-s-2xl rounded-e-2xl text-gray-400 font-semibold `}>Сохранить</button>
            </div>
        </div>
        <hr />
        <div>
        <div className='flex gap-[150px] mt-8 '>
            <h1 className=' text-gray-500 font-semibold text-3xl'>Основные</h1>
            <div className='w-full'>
                <form action="" onSubmit={handlesubmit3}>
                <div className='flex gap-9 text-xl'>
                  <div className=''>
                    <h1 className='text-gray-500 font-semibold'>Наименование</h1>
                    
                    <input type="text"  className={`focus:outline-none mt-3 px-8 w-[410px] border hover:border-blue-600 py-4 rounded-s-2xl rounded-e-2xl ${theme==='dark' ? 'bg-gray-700':'bg-slate-100'} `} 
                    name='store'
                    value={store}
                    onChange={(e)=>{setStore(e.target.value)}}
                    />
                    
                  </div>
                  <div className=''>
                    <h1 className='text-gray-500 font-semibold'>Квадратура</h1>
                    <input className={`focus:outline-none border hover:border-blue-600 mt-3 px-8 w-[410px] py-4 rounded-s-2xl rounded-e-2xl  placeholder:text-right ${theme==='dark' ? 'bg-gray-700':'bg-slate-100'}`}
                     type="text"
                     placeholder='Введите квадратуру                          м2    '
                           value={kvadrat}
                           onChange={(e) => setKvadrat(e.target.value)}
                    />
                  </div>
                </div>
                </form>
                <div className='font-semibold text-xl'>
            <h1 className='text-gray-500 text-xl mt-8 mb-4'>Режим работы</h1>
                <div className=''>
                  <div className={`flex items-center justify-between border mt-4  px-4 py-2.5 w-[855px] rounded-s-2xl rounded-e-2xl hover:border-blue-600 ${theme==='dark' ? 'bg-gray-700':'bg-slate-100'}`}>
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
                        checked={monday}
                        readOnly
                        />
                    <div
                        onClick={() => {
                            setMonday(!monday)
                        }}
                        className={`${theme==='dark'?'bg-gray-500':'bg-gray-200'} w-11 h-6  rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600`}
                    ></div>
                    </label>
             </div>
             </div>
             </button>
                </div>
                <div className={`flex items-center justify-between border mt-4  px-4 py-2.5 w-[855px] rounded-s-2xl rounded-e-2xl hover:border-blue-600 ${theme==='dark' ? 'bg-gray-700':'bg-slate-100'}`}>
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
                        checked={tuesday}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            setTuesday(!tuesday);
                        }}
                        className={`${theme==='dark'?'bg-gray-500':'bg-gray-200'} w-11 h-6  rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600`}
                    ></div>
                    </label>
                    </div>
                    </div>
                    </button>
                     </div>
                    <div className={`flex items-center justify-between border mt-4  px-4 py-2.5 w-[855px] rounded-s-2xl rounded-e-2xl hover:border-blue-600 ${theme==='dark' ? 'bg-gray-700':'bg-slate-100'}`}>
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
                        checked={wednesday}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            setWednesday(!wednesday);
                        }}
                        className={`${theme==='dark'?'bg-gray-500':'bg-gray-200'} w-11 h-6  rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600`}
                    ></div></label>
            </div>
        </div>
                    </button>
                </div>
                <div className={`flex items-center justify-between border mt-4  px-4 py-2.5 w-[855px] rounded-s-2xl rounded-e-2xl hover:border-blue-600 ${theme==='dark' ? 'bg-gray-700':'bg-slate-100'}`}>
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
                        checked={thursday}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            setThursday(!thursday);
                        }}
                        className={`${theme==='dark'?'bg-gray-500':'bg-gray-200'} w-11 h-6  rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600`}></div></label>
            </div>
        </div>
                    </button>
                </div>
                <div className={`flex items-center justify-between border mt-4  px-4 py-2.5 w-[855px] rounded-s-2xl rounded-e-2xl hover:border-blue-600 ${theme==='dark' ? 'bg-gray-700':'bg-slate-100'}`}>
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
                        checked={friday}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            setFriday(!friday);
                        }}
                        className={`${theme==='dark'?'bg-gray-500':'bg-gray-200'} w-11 h-6  rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600`}
                    ></div></label>
            </div>
        </div>
                    </button>
                </div>
                <div className={`flex items-center justify-between border mt-4  px-4 py-2.5 w-[855px] rounded-s-2xl rounded-e-2xl hover:border-blue-600 ${theme==='dark' ? 'bg-gray-700':'bg-slate-100'}`}>
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
                        checked={saturday}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            setSaturday(!saturday);
                        }}
                        className={`${theme==='dark'?'bg-gray-500':'bg-gray-200'} w-11 h-6  rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600`}
                    ></div></label>
            </div>
        </div>
                    </button>
                </div>
                <div className={`flex items-center justify-between border mt-4  px-4 py-2.5 w-[855px] rounded-s-2xl rounded-e-2xl hover:border-blue-600 ${theme==='dark' ? 'bg-gray-700':'bg-slate-100'}`}>
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
                        checked={sunday}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            setSunday(!sunday);
                        }}
                        className={`${theme==='dark'?'bg-gray-500':'bg-gray-200'} w-11 h-6  rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600`}
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
                    <div className={`border mt-4  px-4 py-2.5 w-[855px] rounded-s-2xl rounded-e-2xl hover:border-blue-600 ${theme==='dark' ? 'bg-gray-700':'bg-slate-100'}`}>
                  <div className={`flex items-center justify-between w-[725px] `}>
                  <h1 className={`text-gray-500 text-xl font-semibold `}>Cashbox Riviera</h1>
                   
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
                        className={`${theme==='dark'?'bg-gray-500':'bg-gray-200'} w-11 h-6  rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600`}
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
              className={`border w-[320px] px-4 py-4 focus:outline-none rounded-s-2xl rounded-e-2xl placeholder:font-semibold text-xl hover:border-blue-600  ${theme==='dark' ? 'bg-gray-700':'bg-slate-100'}`}
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
                    <button className={`border w-[320px] px-3 py-4  mt-4 rounded-s-2xl rounded-e-2xl text-blue-500 font-semibold text-xl hover:border-blue-600 ${theme==='dark' ? 'bg-gray-700':'bg-slate-100'}`} onClick={addInput}>
                        + Добавить телефон
                   </button>
                </form>
                </div>



                <div className='flex gap-11 mt-11'>
                <div className='w-80'>
                   <h1 className='font-semibold text-gray-500 mb-4 text-xl'>Facebook</h1>
                        <input type="text" className={`border w-full px-3 py-4  focus:outline-none rounded-s-2xl rounded-e-2xl placeholder:font-semibold text-xl hover:border-blue-600 ${theme==='dark' ? 'bg-gray-700':'bg-slate-100'} `}
                        placeholder='Название страницы'
                        value={facebookUsername}
                               onChange={(e) => setFacebookUsername(e.target.value)}
                        />
                   
                   <h1 className='font-semibold text-gray-500 mb-4 mt-8 text-xl'> Telegram</h1>
                    <input type="text" className={`border w-full px-3 py-4  focus:outline-none rounded-s-2xl rounded-e-2xl placeholder:font-semibold text-xl hover:border-blue-600 ${theme==='dark' ? 'bg-gray-700':'bg-slate-100'} `} 
                    placeholder='@ Юзернейм'
                           value={telegramUsername}
                           onChange={(e) => setTelegramUsername(e.target.value)}/>
                    
                </div>
                <div className='w-80'>
                    <h1 className='font-semibold text-gray-500 mb-4 text-xl'>Instagram</h1>
                        <input type="text" className={`border w-full px-3 py-4  focus:outline-none rounded-s-2xl rounded-e-2xl placeholder:font-semibold text-xl hover:border-blue-600 ${theme==='dark' ? 'bg-gray-700':'bg-slate-100'} `}
                        placeholder='@ Юзернейм'
                               value={InstagramUsername}
                               onChange={(e) => setInstagramUsername(e.target.value)}
                        />
               
                    <h1 className='font-semibold text-gray-500 mb-4 mt-8 text-xl'>Сайт</h1>
                        <input type="text" className={`border w-full px-3 py-4  focus:outline-none rounded-s-2xl rounded-e-2xl placeholder:font-semibold text-xl hover:border-blue-600 ${theme==='dark' ? 'bg-gray-700':'bg-slate-100'}`}
                        placeholder='Ссылка на сайт'
                               value={siteLink}
                               onChange={(e) => setSiteLink(e.target.value)}
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
                     <button  className={`${color2 === "light" ? "bg-white" : "bg-gray-100t"} bg-slate-100 text-gray-400 font-semibold  px-20 py-2.5 rounded-s-xl rounded-e-xl`} onClick={toggleColor2} >Нет</button>
                     </div>
                    </div>
                </div>
                <div className=''>
                    <h1 className='text-gray-500 font-semibold mb-4 '>Юридическое название компании</h1>
                    <input type="text" className={`border w-[410px] px-4 py-4 rounded-s-2xl rounded-e-2xl  focus:outline-none placeholder:font-semibold placeholder:text-xl placeholder:text-gray-400 hover:border-blue-600 ${theme==='dark' ? 'bg-gray-700':'bg-slate-100'} `}
                    placeholder='Введите название'
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                    />
                </div>
                </div>
                <div className='w-[855px]'>
                    <h1 className='font-semibold text-gray-500 mb-4 mt-8 text-xl'>Юридический адрес</h1>
                    <input type="text" className={` px-4 py-4 w-full rounded-s-2xl rounded-e-2xl border focus:outline-none placeholder:font-semibold placeholder:text-xl placeholder:text-gray-400 hover:border-blue-600 ${theme==='dark' ? 'bg-gray-700':'bg-slate-100'}`}
                    placeholder='Город, район, улица, дом'
                           value={davlat}
                           onChange={(e) => setDavlat(e.target.value)}
                    />
                    <div className='flex gap-8 mt-8'>
                       
                        <select name="" id="" className={`w-full border px-4 py-4 flex justify-between rounded-s-2xl rounded-e-2xl  hover:border-blue-600 focus:outline-none       ${theme==='dark' ? 'bg-gray-700':'bg-slate-100'} text-gray-400 font-semibold text-xl`}>
                            <option value="" className='text-gray-400 font-semibold text-xl'>Uzbekistan</option>
                            <option value="" className='text-gray-400 font-semibold text-xl'>Russia</option>
                            <option value="" className='text-gray-400 font-semibold text-xl'>Germaniya</option>
                            <option value="" className='text-gray-400 font-semibold text-xl'>USA</option>
                        </select>
                        <input type="text" className={`px-4 py-4 border w-full rounded-s-2xl rounded-e-2xl  focus:outline-none placeholder:font-semibold placeholder:text-xl placeholder:text-gray-400 hover:border-blue-600 ${theme==='dark' ? 'bg-gray-700':'bg-slate-100'}`}
                        placeholder='Введите почтовый индекс'
                               value={emailIndex}
                               onChange={(e) => setEmailIndex(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <h1 className='font-semibold text-gray-500 mb-4 mt-8 text-xl'>Банковский счет</h1>
                    <form action="" onSubmit={handlesubmit2} className='w-[855px]'>
                        {bankAccounts.map((account, index) => (
                         <div key={index} className='relative'>
                        <input
                         type="text"
                             className={`border hover:border-blue-600 w-full rounded-t-2xl rounded-b-2xl  px-4 py-4  focus:outline-none placeholder:font-semibold placeholder:text-xl placeholder:text-gray-400 mb-8 ${theme==='dark' ? 'bg-gray-700':'bg-slate-100'}`}
                             placeholder='Введите банковский счет'
                             value={account}
                            onChange={(e) => handleChange2(index, e.target.value)}
                            />
                            {index >= 1 && (
                        <button
                         type="button"
                         className='absolute top-2 right-2 px-4 py-4 '
                        onClick={() => removeInput2(index)}>
                         <img src={deleteIcon} alt="delete" />
                         </button>
                         )}
                         </div>

                        ))

                        }
                         <input type="text" className={`border hover:border-blue-600 focus:outline-none w-full rounded-t-2xl  rounded-b-2xl px-4 py-4  placeholder:font-semibold placeholder:text-xl placeholder:text-gray-400 ${theme==='dark' ? 'bg-gray-700':'bg-slate-100'}`}
                        placeholder='Название банка и филиал'
                                value={bank}
                                onChange={(e) => setBank(e.target.value)}
                        /> 
                       
                    </form>
                    <button onClick={addInput2} className={`mt-8 w-full px-4 py-4  rounded-s-2xl rounded-e-2xl text-gray-400 font-semibold text-xl hover:border-blue-600 border ${theme==='dark' ? 'bg-gray-700':'bg-slate-100'}`}>+ Добавить еще один банковский счет</button>
                </div>
            </div>
            
            </div>
            <hr className='my-10' />
        </div>
    </div>
  )
}
