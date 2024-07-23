import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import LoginPage from './components/LoginPage.jsx'
import SignupPage from './components/SignupPage.jsx';
import Dashboard from './components/Dashboard.jsx'
import EditPage from './components/EditPage.jsx'
import Details from './components/Details.jsx'

const router = createBrowserRouter([
 {
   path: "/",
   element: <LoginPage />
 },
 {
  path: "/signup",
  element: <SignupPage />
 },
 {
  path: "/dashboard",
  element: <Dashboard />
 },
 {
  path: "/edit",
  element: <EditPage />
 },
 {
  path: "/detail",
  element: <Details />
 }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
