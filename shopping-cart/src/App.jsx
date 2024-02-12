import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar.jsx';
import {Cart} from "./Cart.jsx";
import {Shop} from "./Shop.jsx";
import { ShopContextProvider } from './contextProvider.jsx';
function App() {
  return <div className = "App">
    <ShopContextProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route  path = "/" element = {<Shop/>}/>
        <Route path = "/cart" element = {<Cart/>}/>
      </Routes>
    </Router>
    </ShopContextProvider>
  </div>
}

export default App
