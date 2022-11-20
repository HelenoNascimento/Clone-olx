import React from 'react';
import { Routes , Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';



    export default () => {
        return (
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/sobre" element={<About />}/>
            </Routes>
        );
    }
