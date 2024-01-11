import React from 'react'
import leftIcon from '../assets/leftIcon.svg'
import { useGlobalContext } from '../context'

export default function StoreRivera() {
    const {addPage2}=useGlobalContext()
  return (
    <div>
        <div className='flex justify-between mt-11 mb-8 '>
            <div className='flex items-center gap-4  '>
                <button onClick={addPage2} className='px-3.5 py-2.5 bg-gray-100 border rounded-full'>
            <img  src={leftIcon} />
            </button>
            
            <h1 className='font-semibold text-4xl'><span className='text-gray-200 '>Магазин</span> Store Riviera</h1>
            </div>
            <div className='flex gap-4'>
            <button className='px-5 py-4 bg-gray-100 rounded-s-2xl rounded-e-2xl'>Сбросить</button>
            <button className='px-5 py-4 bg-gray-100 rounded-s-2xl rounded-e-2xl'>Сохранить</button>
            </div>

        </div>
        <hr />
        <div>
        <div className='flex mt-8 '>
            <h1 className='w-[400px] text-gray-500 font-semibold text-3xl'>Основные</h1>
            <div className='w-full'>
                <div className='flex gap-9 '>
                <div>
                    <h1 className='text-gray-500 font-semibold'>Наименование</h1>
                    <input type="text" className='mt-3 px-20 py-4 rounded-s-2xl rounded-e-2xl bg-gray-100' />
                </div>
                <div>
                    <h1 className='text-gray-500 font-semibold'>Квадратура</h1>
                    <input type="text" className='mt-3 px-20 py-4 rounded-s-2xl rounded-e-2xl bg-gray-100' />
                </div>
                </div>
            </div>
        </div>
        <div>
            <h1>Режим работы</h1>
            <div>
                <div>
                    <h1>Понедельник</h1>
                    <div>
                    <h1>Открытие: 8:00</h1>
                    <h1>Закрытие: 20:00</h1>
                    </div>
                    <div>
          {startIndex > -4 && (
            <button
              className="bg-[#1F1F1F] hover:bg-[#1A1A1A] mr-4 text-white font-bold py-2 px-4 rounded"
              onClick={handleReturnToFirstSlice}
            >
              <img src={left} alt="Left Arrow" />
            </button>
          )}
          {data.length > startIndex + 4 && (
            <button
              className="bg-[#1F1F1F] hover:bg-[#1A1A1A] text-white font-bold py-2 px-4 rounded"
              onClick={handleLoadMore}
            >
              <img src={right} alt="Right Arrow" />
            </button>
          )}
        </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
