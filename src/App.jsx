import Header from './components/common/header.jsx';
//import Footer from './components/common/footer.jsx';
import Home from './components/pages/Home.jsx';
import About from './components/pages/About.jsx';
import Contact from './components/pages/Contact.jsx';
import Services from './components/pages/Services.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Privacy from './components/pages/Privacy.jsx';
import Faq from './components/pages/Faq.jsx';
export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={< Home />} />
          <Route path="/about" element={< About />} />
          <Route path="/contact" element={< Contact />} />
          <Route path="/service" element={< Services />} />
          <Route path="/privacy-policy" element={< Privacy />} />
          <Route path="/faq" element={<Faq/>} />
        </Routes>
        {/* <Footer /> */}
        {/* this for testing */}
      </Router>
    </div>
  )
}