import { createBrowserRouter } from "react-router-dom";
import MainPage from '../pages/mainPage/mainPage'
import NoPage from '../pages/noPage/noPage'


export const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainPage /> 
    },
   
    {
        path: '/result',
        element: <NoPage /> 
    }
]);