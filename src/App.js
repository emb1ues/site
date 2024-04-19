import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar.js";
import HomeMain from "./components/Home/homepage.js";
import AuthPage from "./components/Alpha_reques_form/form.js";
import TerabhAIPage from "./components/terabhAI/terabhai.js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";

const App = () => {
  return (
    <Router>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/registration" element={<AuthPage />} />
        <Route path="/terabhAI" element={<TerabhAIPage />} />
      </Routes>
    </Router>
  );
};

export default App;

