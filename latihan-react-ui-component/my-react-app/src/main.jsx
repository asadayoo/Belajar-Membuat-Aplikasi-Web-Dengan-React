import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import LatihanComponentProperti from './LatihanComponentProperti.jsx'
import News from './News.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <LatihanComponentProperti /> */}
    <News />
  </StrictMode>,
)
