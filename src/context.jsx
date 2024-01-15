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
  const [store,setStore]=useState(getStore(''));
  const [enabled, setEnabled] = useState(false);
  const [monday,setMonday]=useState(false);
  const [tuesday,setTuesday]=useState(false);
  const [wednesday,setWednesday]=useState(false);
  const [thursday,setThursday]=useState(false);
  const [friday,setFriday]=useState(false);
  const [saturday,setSaturday]=useState(false);
  const [sunday,setSunday]=useState(false);
  const [color1, setColor1] = useState("light");
  const [color2, setColor2] = useState("light");
  const [phoneNumbers, setPhoneNumbers] = useState(['']); 
  const [bankAccounts, setBankAccounts] = useState(['', '']);
  const [kvadrat, setKvadrat] = useState('');
  const [davlat, setDavlat] = useState('');
  const [telegramUsername, setTelegramUsername] = useState('');
  const [InstagramUsername, setInstagramUsername] = useState('');
  const [facebookUsername, setFacebookUsername] = useState('');
  const [siteLink, setSiteLink] = useState('');
  const [name, setName] = useState('');
  const [emailIndex, setEmailIndex] = useState('');
  const [bank, setBank] = useState('');
  console.log(kvadrat)
  console.log(davlat)

  const [theme,setTheme]=useState(localStorage.getItem('mode'));
     
  const handleSubmit3 = (e) => {
    e.preventDefault()
    
        const newItem={id:id,name:store}
        setList([...list,newItem]);
        setStore('')
   console.log(list);
    
    }

    const ToggleTheme=()=>{
        setTheme((prev)=>(prev === "light" ? "dark" : "light"))
        localStorage.setItem('mode',theme === 'light' ? "dark" : "light");
    }

  const handleChange2 = (index, value) => {
    const updatedAccounts = [...bankAccounts];
    updatedAccounts[index] = value;
    setBankAccounts(updatedAccounts);
  };

  const addInput2 = () => {
    if(bankAccounts.length<2){
      setBankAccounts([...bankAccounts, '']);
    }
    
  };

  const removeInput2 = (index) => {
    if (bankAccounts.length > 1) {
      const updatedAccounts = [...bankAccounts];
      updatedAccounts.splice(index, 1);
      setBankAccounts(updatedAccounts);
    }
  };

  const handlesubmit2 = (e) => {
    e.preventDefault();
    
    // console.log('Bank Account Numbers:', bankAccounts);
  };

  const handleChange = (index, value) => {
    const newPhoneNumbers = [...phoneNumbers];
    newPhoneNumbers[index] = value;
    setPhoneNumbers(newPhoneNumbers);
  };

  const addInput = () => {
    if (phoneNumbers.length<2) {
      setPhoneNumbers([...phoneNumbers, '']);
    }
  };

  const removeInput = (index) => {
    const newPhoneNumbers = [...phoneNumbers];
    newPhoneNumbers.splice(index, 1);
    setPhoneNumbers(newPhoneNumbers);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
  
    // console.log('Phone Numbers:', phoneNumbers);
  };
  

  const toggleColor1 = () => {
    setColor1((prev) => (prev === "light" ? "dark" : "light"));
    setColor2((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleColor2 = () => {
    setColor2((prev) => (prev === "light" ? "dark" : "light"));
    setColor1((prev) => (prev === "light" ? "dark" : "light"));
  };

 
 

const handleSubmit=(e)=>{
  e.preventDefault()
  const newItem = { title: task, password:password,}
  setuser([...user, newItem])
  setPr({task:task,password:password})
  setTask('')
  setPassword('')
  navigate("/")
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

  const handleSave = () => {
    navigate("/magazin")
    setStore('')
  };

  const addEnable = (setState,state) => {
    setState(!state)
}

const checks = store !== '' && kvadrat !== '' && InstagramUsername !== '' && facebookUsername !== '' && telegramUsername !== '' && siteLink !== '' && name !== '' && davlat !== '' && emailIndex !== '' && bank !== '';
console.log(checks)

const addLocalStorage = () => {
    const obj = {
        phoneNumbers,
        username: name,
        kvadrat,
        insagram_link: InstagramUsername,
        facebook_link: facebookUsername,
        siteLink,
        telegramUsername,
        davlat,
        emailIndex,
        bank,
        name:store
    }


    const arr = JSON.parse(localStorage.getItem('data')) || [];


    arr.push(obj);

    localStorage.setItem('data', JSON.stringify(arr));
    

    navigate('/magazin');
    
}
  
  

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
        removeItem,
        addPage,
        addPage2,
        enabled,
        setEnabled,
        handleCheckboxClick,
        color1,
        setColor1,
        color2,
        setColor2,
        toggleColor1,
        toggleColor2,
        phoneNumbers,
        setPhoneNumbers,
        handlesubmit ,
        addInput,
        handleChange,
        removeInput,
        handlesubmit2,
        removeInput2 ,
        addInput2,
        handleChange2,
        bankAccounts,
        setBankAccounts,
        handleSave,
        theme,
        setTheme,
        ToggleTheme,
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
          addEnable,
          checks,
          handleSubmit3
          


      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useGlobalContext() {
  return useContext(UserContext)
}
