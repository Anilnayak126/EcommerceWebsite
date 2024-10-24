import React from "react";
import { Container } from "react-bootstrap"; // Importing the Container component
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Headers from "./components/Navbar";
import Footer from "./components/Footer";
import HomeScreen from "./components/screens/HomeScreen";
import LoginScreens from "./components/screens/LoginScreens";
import SignupScreens from "./components/screens/SignupScreens";
import Cart from "./components/screens/Cart";
import S_products from "./components/screens/S_products";
About

import Appix from "./components/Api/Appix";
import About from "./components/screens/AboutScreens";

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
          <Route  path="/Cart" element={<Cart />} />
        </Routes>
        <Routes>
          <Route  path="/About" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
