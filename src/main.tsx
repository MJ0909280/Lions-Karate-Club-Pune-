import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Register service worker for Progressive Web App (PWA) functionality
try {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      try {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('PWA Service Worker registered successfully: ', registration.scope);
          })
          .catch((error) => {
            console.error('PWA Service Worker registration failed: ', error);
          });
      } catch (err) {
        console.warn('PWA Service Worker registration blocked by browser/sandbox context:', err);
      }
    });
  }
} catch (err) {
  console.warn('Service worker check blocked by browser/sandbox context:', err);
}
