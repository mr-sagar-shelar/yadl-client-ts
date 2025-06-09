import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index1.css'
import App from './App.tsx'

createRoot(document.getElementById('editor')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
