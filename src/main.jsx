import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AppProvider } from "./Components/Context/UseContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
    <App />
    </AppProvider>
  </StrictMode>,
)
