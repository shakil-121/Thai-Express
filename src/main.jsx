import React from 'react'
import ReactDOM from 'react-dom/client' 
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import router from './Router/Route.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './AuthProvider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
