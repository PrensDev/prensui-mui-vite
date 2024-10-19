import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <App />
  </StrictMode>,
)
