import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CountriesProvider } from './context/countriesContext.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountriesProvider>
    
      <App />
    </CountriesProvider>
  </StrictMode>,
)
