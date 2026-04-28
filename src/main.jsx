import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SketchProvider } from 'sketchbook-ui';
import 'sketchbook-ui/style.css';
import './styles/tailwind.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SketchProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SketchProvider>
  </React.StrictMode>
);
