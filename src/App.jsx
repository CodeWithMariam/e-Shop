import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Order from './pages/Order';
import FilterData from './pages/FilterData';
import ProductDetail from './pages/ProductDetail';
import { mockData } from './assets/mockData';
import { setProducts } from './redux/productSlice';
import { useDispatch } from 'react-redux';
import Contact from './pages/Contact';
import About from './pages/About';


function App() {
  const [order, setOrder] =  useState(null)
  const dispatch = useDispatch();

  // Dispatching mock data to Redux store when the component mounts
  useEffect(() => {
    dispatch(setProducts(mockData));
  }, [dispatch]);


  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
       <Route path="/" element={<Home />}></Route>
       <Route path="/shop" element={<Shop />}></Route>
       <Route path="/cart" element={<Cart />}></Route>
       <Route path="/checkout" element={<Checkout setOrder={setOrder}/>}></Route>
       <Route path="/order-confirmation" element={<Order order={order}/>}></Route>
       <Route path="/filter-data" element={<FilterData />}></Route>
       <Route path="/product/:id" element={<ProductDetail />}></Route>
       <Route path="/contact" element={<Contact />}></Route>
       <Route path="/about" element={<About />}></Route>
      </Routes>
     <Footer />
    </BrowserRouter>  
  )
}

export default App
