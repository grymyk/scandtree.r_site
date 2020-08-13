import React from 'react';
import './App.css';

import Header from './Header'
import About from './About'
import Gallery from './Gallery'
import Reformer from './Reformer'
import Product from './Product'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  return (
      <div>
          <Header />
          <About />
          <Gallery />
          <Reformer />
          <Product />
          <Contact />
          <Footer />
      </div>
  );
}

export default App;
