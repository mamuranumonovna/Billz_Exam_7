import {Navigate, Outlet} from "react-router-dom";
import { useGlobalContext } from "../context";
import {useEffect, useState} from "react";




export default function ProtectedRoute() {

  const [token,setToken] = useState();

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem('users')) || [])
  },[])

    if (Array.isArray(token)) {
      if(token.length === 0) {
        return <Navigate to='/login' />
      }
    }

    return <Outlet/>
}
