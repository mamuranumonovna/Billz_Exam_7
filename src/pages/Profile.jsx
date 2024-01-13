import React, { useState } from 'react';

const YourComponent = () => {
  const [bankAccounts, setBankAccounts] = useState(['', '']);

  const handleChange = (index, value) => {
    const updatedAccounts = [...bankAccounts];
    updatedAccounts[index] = value;
    setBankAccounts(updatedAccounts);
  };

  const addInput = () => {
    if(bankAccounts.length<3){
      setBankAccounts([...bankAccounts, '']);
    }
    
  };

  const removeInput = (index) => {
    if (bankAccounts.length > 2) {
      const updatedAccounts = [...bankAccounts];
      updatedAccounts.splice(index, 1);
      setBankAccounts(updatedAccounts);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Bank Account Numbers:', bankAccounts);
  };

  return (
    <div>
      <h1 className='font-semibold text-gray-500 mb-4 mt-8 text-xl'>Банковский счет</h1>
      <form onSubmit={handleSubmit} className='w-[855px]'>
        {bankAccounts.map((account, index) => (
          <div key={index} className='relative'>
            <input
              type="text"
              className={`border-b-[1px] w-full rounded-t-2xl px-4 py-4 bg-slate-100 focus:outline-none placeholder:font-semibold placeholder:text-xl placeholder:text-gray-400`}
              placeholder='Введите банковский счет'
              value={account}
              onChange={(e) => handleChange(index, e.target.value)}
            />
            {index >= 2 && (
              <button
                type="button"
                className='absolute top-1/2 right-4 transform -translate-y-1/2 border px-3 py-2 bg-slate-100 rounded-s-2xl rounded-e-2xl text-blue-500 font-semibold text-xl hover:border-blue-600'
                onClick={() => removeInput(index)}
              >
                Удалить
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          className='mt-8 w-full px-4 py-4 bg-slate-100 rounded-s-2xl rounded-e-2xl text-gray-400 font-semibold text-xl hover:border-blue-600 border'
          onClick={addInput}
        >
          + Добавить еще один банковский счет
        </button>
        <button type="submit" className='border w-full px-3 py-4 bg-slate-100 mt-4 rounded-s-2xl rounded-e-2xl text-blue-500 font-semibold text-xl hover:border-blue-600'>
          Отправить
        </button>
      </form>
    </div>
  );
};

export default YourComponent;
