import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import PulauTidung from './pages/PulauTidung';
import PulauBidadari from './pages/PulauBidadari';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/pulau-tidung" element={<PulauTidung />} />
        <Route path="/pulau-bidadari" element={<PulauBidadari />} />
      </Routes>
    </Router>
  );
}

export default App;
