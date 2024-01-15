import { useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import { useGlobalContext } from './context';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Company from './pages/Company';
import Magazin from './pages/Magazin';
import CashRegistr from './pages/CashRegistr';
import Checks from './pages/Checks';
import Currencies from './pages/Currencies';
import Products from './pages/Products';
import StoreRivera from './pages/StoreRivera';
import ProtectedRoute from './components/ProtectedRoute';
import Error from "./pages/Error.jsx";

function App() {
    const { user, list, theme } = useGlobalContext();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(user));
        localStorage.setItem('lists', JSON.stringify(list));
    }, [user, list]);

    // Check if the current route is the login page
    const isLoginPage = location.pathname === '/login';

    return (
        <>
            <div className={`${theme === "light" ? "bg-white" : "bg-gray-800"}`}>
                <div className= {`${isLoginPage ? 'block' : 'flex'}`}>
                    {!isLoginPage && <Sidebar />}
                    <div className={`${location.pathname === '/magazin/magazin' ? 'h-auto' : 'h-screen'}`}>
                        <Routes>
                            <Route path='/' element={<Navigate to='/login' />} />
                            <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/profile' element={<Profile />} />
                            <Route path='/company' element={<Company />} />
                            <Route path='/magazin' element={<Magazin />} />
                            <Route path='/cash' element={<CashRegistr />} />
                            <Route path='/check' element={<Checks />} />
                            <Route path='/currencies' element={<Currencies />} />
                            <Route path='/products' element={<Products />} />
                            <Route path='/magazin/magazin' element={<StoreRivera />} />
                            <Route path='*' element={<Error />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
