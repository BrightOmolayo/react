import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import TestingReact from './greeting.jsx'
import Bright from './mypicture.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bright/>
  </StrictMode>,
)
