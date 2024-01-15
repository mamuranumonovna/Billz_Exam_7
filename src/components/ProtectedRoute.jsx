import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../context";



// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({ children }) {
  
  const {pr}=useGlobalContext();

    if (!pr){
      return <Navigate to='/home' />
    }

    return children
}
