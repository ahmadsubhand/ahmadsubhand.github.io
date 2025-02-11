import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function applyTheme() {
  return document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
  );
}

const isDark = applyTheme();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App isDark={isDark} />
  </StrictMode>,
)
