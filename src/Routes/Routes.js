import { createBrowserRouter } from "react-router-dom";
import HomePage from "./../Pages/HomePage";
import Main from "../Layout/Main";
import TvProject from "../Pages/Projects/TvProject";
import VisaProject from "../Pages/Projects/VisaProject";
import OfficeProject from "../Pages/Projects/OfficeProject";

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main></Main>, 
            children: [
                
                {
                    path: '/',
                    element: <HomePage/>                
                },
                {
                    path: '/tvproject',
                    element: <TvProject></TvProject>               
                },
                {
                    path: '/visaproject',
                    element: <VisaProject></VisaProject>               
                },
                {
                    path: '/officeproject',
                    element: <OfficeProject></OfficeProject>               
                },
            
            ]
        }
    ]
)