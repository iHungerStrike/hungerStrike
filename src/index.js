import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <div>
      <Navbar />
        <App />
      <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


