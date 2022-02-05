import React from "react";
//import AppContainer from "./components/AppContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//import components
import Header from "./components/Header";
import Footer from "./components/Footer";

//import pages
import Home from "./Pages/Home";
import Works from "./Pages/Works";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/works" element={<Works />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/resume" element={<Resume />} />

        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
