import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import Footer from './components/Footer';
import Features from './components/Feature';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Hero />
      <Features /> 
       
        
      <Product />

      <Routes>
      <Route path="/services/:id" element={<Services />} />  
      <Route path="/products" element={<Product />} /> 
      </Routes>

      <About/> 

      <Contact />

      <Footer />
    </Router>
  );
}

export default App;
