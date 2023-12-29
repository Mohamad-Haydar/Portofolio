import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './App.tsx'
import './index.css'
import { DarkModeContextProvider } from './Context/DarkModeContextProvider.tsx'
import ThemeContextProvider from './Context/ThemeContextProvider.tsx'
import { RouterProvider } from 'react-router-dom'
import { CustomLiProvider } from './Context/CustomLiContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <DarkModeContextProvider>
      <CustomLiProvider>
        {/* <App /> */}
        <RouterProvider router={router}/>
        </CustomLiProvider>
      </DarkModeContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
)
