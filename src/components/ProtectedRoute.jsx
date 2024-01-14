import { Navigate, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";



export default function ProtectedRoute({ children }) {
  
  const {pr}=useGlobalContext();

    if (!pr){
      return <Navigate to='/home' />
    }

    return children
}
