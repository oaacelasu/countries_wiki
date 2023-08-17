import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Correct import
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
