import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Page/Home';
import Catagory from './Page/Catagory';
import NewsLayout from './Layout/NewsLayout';
import News from './Page/News';
import Provider from './provider/Provider';
import LoginLayout from './Layout/LoginLayout';
import Login from './Page/Login';
import Rester from './Page/Rester';


const router = createBrowserRouter([
  {
      path: '/',
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element:<Catagory></Catagory>,
            loader: () => fetch('http://localhost:5000/news')
        },
        {
            path: 'category/:id',
            element: <Catagory></Catagory>,
            loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
        }
    ]
      
  },
  {
    path:'news',
    element: <NewsLayout></NewsLayout>,
    children : [
      {
        path: ':id',
        element:<News></News>,
        loader : ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
      }
    ]
  }
  ,{
    path: 'login',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  }
  ,{
    path: 'rester',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/rester',
        element: <Rester></Rester>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)
