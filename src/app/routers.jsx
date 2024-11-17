import { createBrowserRouter } from "react-router-dom";
import MainPage from '../pages/mainPage/mainPage'
import AuthPage from "../pages/auth/authPage/authPage";
import RegisterPage from "../pages/auth/registerPage/registerPage";
import NoPage from '../pages/noPage/noPage'


export const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainPage /> 
    },
    {
        path: '/auth',
        element: <AuthPage /> 
    },
    {
        path: '/registration',
        element: <RegisterPage /> 
    },
   
    {
        path: '/*',
        element: <NoPage /> 
    }
]);