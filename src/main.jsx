import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import HolaMundo from "./components/HolaMundo"
import Calama from "./components/Calama"
import Ejercicio01 from "./components/Ejercicios/Ejercicio01"
import Tareas from './components/Tareas/Tareas.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  } ,
  {
    path: "/hola",
    element: <HolaMundo/>,
  },
  {
    path: "/ciudad",
    element: <Calama/>,
  },
  {
    path:"/ejercicio01",
    element:<Ejercicio01/>
  },
  {
    path:"/Tareas",
    element: <Tareas/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
