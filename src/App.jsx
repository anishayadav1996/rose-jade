import Header from './components/common/Header.jsx';
import Footer from './components/common/Footer.jsx';
import Home from './components/pages/Home.jsx';
import About from './components/pages/About.jsx';
import Contact from './components/pages/Contact.jsx';
import Services from './components/pages/Services.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Privacy from './components/pages/Privacy.jsx';
import Terms from './components/pages/Terms.jsx';
import Blogs from './components/pages/Blogs.jsx';
import BlogIndividaul from './components/pages/blogs/blogIndividaul.jsx';
export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={< Home />} />
          <Route path="/about-us" element={< About />} />
          <Route path="/contact-us" element={< Contact />} />
          <Route path="/service" element={< Services />} />
          <Route path="/privacy-policy" element={< Privacy />} />
          <Route path="/terms-conditions" element={< Terms />} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/blogs/:blogSlug" element={<BlogIndividaul/>} />
        </Routes>
        {/* <Editor /> */}
        <Footer />
      </Router>
      
    </div>
  )
}