import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom';
import Layout from './Components/Layout/Layout.jsx';
import About from './Components/About/About.jsx';
import Projects from './Components/Projects/Projects.jsx';
import Home from './Components/Home/Home.jsx';

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='about' element={<About/>} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
)
