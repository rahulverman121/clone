import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import Getstarted from './Getstarted';
import reportWebVitals from './reportWebVitals';
import Howitwork from './Howitwork';
import Menu from './Menu';
import Questions from './Questions';
import Footer from './Footer';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Getstarted />
    <Howitwork />
    <Menu />
    <Questions />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
