/**
 * File: App.js
 * Created by: Oscar Acelas (@oacelasupegui4062@conestogac.on.ca) on August 16, 2023
 * Contributors:
 *   - Oscar Acelas (@oacelasupegui4062@conestogac.on.ca) - Added BrowserRouter, Routes and Route components
 * Last Modified: August 16, 2023
 */

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/pico.css';
import Home from './components/Home';
import CountryDetail from './components/CountryDetail';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/country/:countryCode" element={<CountryDetail />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/contact" element={<ContactUs />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
