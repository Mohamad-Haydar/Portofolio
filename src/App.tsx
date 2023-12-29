import './App.css'
import { useSelectTheme } from './Context/ThemeContextProvider';
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";


import HomePage from './Pages/HomePage';
import { useSwitchMode } from './Context/DarkModeContextProvider';
import AboutPage from './Pages/AboutPage';
import SideBar from './Components/SideBar';
import Upper from './Components/Upper';
import NavBar from './Components/NavBar';
import Projects from './Pages/Projects';
import { useState } from 'react';
import Project1 from './Pages/Project1';
import Project2 from './Pages/Project2';
import Project3 from './Pages/Project3';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path="/" element={<HomePage />} />
      <Route path="/Home.html" element={<HomePage />} />
      <Route path="/About.html" element={<AboutPage />} />
      <Route path="/Project1.py" element={<Project1 />} />
      <Route path="/Project2.cs" element={<Project2 />} />
      <Route path="/Project3.cs" element={<Project3 />} />
    </Route>
  )
)

function App() {
  const {SelectColorTheme} = useSelectTheme();
  const [collapsed, setCollapsed] = useState(true)

  const handleClick = (e: any) => {
    const dataValue = e.target.dataset.themeColor;
    SelectColorTheme(dataValue)
  }

  const { mode } = useSwitchMode();
  
  return (
      <div className={`${mode} `}>
        <Upper />
        <div className='flex relative main bg-deg1 dark:bg-deg1-dark text-deg1-dark dark:text-deg1'>
          <SideBar state={{ collapsed, setCollapsed }}/>
          <div className='flex-1 '>
            <NavBar state={{ collapsed, setCollapsed }}/>
            <div className=' relative window overflow-y-auto overflow-x-hidden'>
              <div className='container mx-auto'>
                <Outlet/>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default App
