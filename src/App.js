import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Detail from './Components/Detail';
import ImageOverlay from './Components/ImgOverlay';
import SearchResults from './Components/SearchResults';
import { CartProvider } from './Components/AddToCart/CartContext'; // Import CartProvider
import Cart from './Components/AddToCart/Cart';

function App() {
  return (
    <CartProvider> {/* Wrap the entire app with CartProvider */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/login' element={<ImageOverlay />} />
          <Route path='/get-products/:category' element={<Detail />} />
          <Route path='/SearchResults' element={<SearchResults />} />
          <Route path='/myCart' element={<Cart />} />

        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
