import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootswatch theme
import 'bootswatch/dist/cerulean/bootstrap.min.css'; 

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import store from './strore.js';
import {Provider} from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
