// I M P O R T

// Components
import App from './App';

// Modules
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

// E X P O R T

createRoot(document.getElementById('root')).render(
    //<StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    //</StrictMode>
);