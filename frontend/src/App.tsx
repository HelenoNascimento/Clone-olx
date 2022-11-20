import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from './redux/store'
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Routes from './Routes';

function App() {
const user = useSelector((state: RootState) => state.user);

  return (
    <BrowserRouter>
     <Routes />
    </BrowserRouter>
    
  );
}

export default App;
