import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from './redux/store'
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Routes from './Routes';

import { Template } from './components/MainComponents';
import  Header  from './components/partials/Header/Index';
import  Footer  from './components/partials/Footer';

function App() {
const user = useSelector((state: RootState) => state.user);

  return (
    <BrowserRouter>
      <Template>
        <Header />
        <Routes />
        <Footer />
      </Template>
     
    </BrowserRouter>
    
  );
}

export default App;
