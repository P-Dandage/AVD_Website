import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ToStrip from './components/ToStrip';
import ScrollToTop from './components/ScrollToTop'; // Double check your import path!
import FloatingContact from './components/FloatingContact';
// Import Pages
import Home from './Pages/Home';
import Products from './Pages/Products';
import About from './Pages/About';
import Application from './Pages/Application';
import Gallery from './Pages/Gallery';
import Client from './Pages/Client';
import Contact from './Pages/Contact';

export default function App() {

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 flex flex-col">
      
      {/* Imported Component */}

      <ToStrip />
      <ScrollToTop /> {/* <-- Place it right here */}
      <Navbar />

      <main className="flex-grow flex flex-col">
        <FloatingContact />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/application" element={<Application />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/client" element={<Client />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}