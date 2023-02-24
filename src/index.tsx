import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { RouterProvider } from './contexts/RouterContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterProvider>
        <App />
      </RouterProvider>
    </BrowserRouter>
  </React.StrictMode>
)
