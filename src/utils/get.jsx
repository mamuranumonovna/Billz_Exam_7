const getStore=(key)=>{
    return localStorage.getItem(key)? JSON.parse(localStorage.getItem(key)):[]
    }
    export default getStore;