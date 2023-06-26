import React  from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import DashboardLayout from './dashboard/DashboardLayout'
import DashboardPage from './dashboard/dashboard/DashboardPage'
import UsersPage from './dashboard/users/UsersPage'
import RegisterPage from './auth/RegisterPage'
import LoginPage from './auth/LoginPage'
import AuthLayout from './auth/AuthLayout'
import IndexPage from './IndexPage'
import { Provider } from 'react-redux'
import store from './store/store'

const routes = createBrowserRouter([
    {path:'/',element:<AuthLayout/>,children:[
        {path:'/',element:<IndexPage/>},
        {path:'/login',element:<LoginPage/>},
        {path:'/register',element:<RegisterPage/>},
    ]},
    {path:'/dashboard',element:<DashboardLayout/>,children:[
        {path:'',element:<DashboardPage/>},
        {path:'users',element:<UsersPage/>}
    ]}
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Provider store={store}>
            <RouterProvider router={routes} />
        </Provider>
    </>
)