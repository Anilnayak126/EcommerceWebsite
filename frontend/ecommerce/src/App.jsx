import React from "react";
import { Container } from "react-bootstrap"; 
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Headers from "./components/Navbar";
import Footer from "./components/Footer";
import HomeScreen from "./components/screens/HomeScreen";
import LoginScreens from "./components/screens/LoginScreens";
import SignupScreens from "./components/screens/SignupScreens";
import CartScreen from "./components/screens/Cart";
import S_products from "./components/screens/S_products";


import Appix from "./components/Api/Appix";
import About from "./components/screens/AboutScreens";
import Contact from "./components/screens/ContactScreens";
import AddtoCart from "./components/screens/AddtocartScreen";

import PayPalCallback from './components/screens/PayPalCallback';

import '@fortawesome/fontawesome-free/css/all.min.css';





const App = () => {
  return (
    <>
      <Router>
        <Headers />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
        </Routes>
        <Routes>
          <Route  path="product/:id" element={<S_products/>} />
        </Routes>
        <Routes>
          <Route  path="/Products" element={<Appix/>} />
        </Routes>
        <Routes>
          <Route  path="/Login" element={<LoginScreens />} />
        </Routes>
        <Routes>
          <Route  path="/Signup" element={<SignupScreens />} />
        </Routes>
        <Routes>
          <Route  path="/Cart" element={<CartScreen />} />
        </Routes>
        <Routes>
          <Route  path="/About" element={<About />} />
        </Routes>
        <Routes>
          <Route  path="/Contact" element={<Contact />} />
        </Routes>
        <Routes>
          <Route  path="/Addcart/:id" element={<AddtoCart/>} />
        </Routes>
        <Routes>
          <Route  path="/paypal/callback" element={<PayPalCallback />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
