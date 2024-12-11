import Header from './components/common/Header.jsx';
import Footer from './components/common/Footer.jsx';
import Home from './components/pages/Home.jsx';
import About from './components/pages/About.jsx';
import Contact from './components/pages/Contact.jsx';
import Services from './components/pages/Services.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Privacy from './components/pages/Privacy.jsx';
import Faq from './components/pages/Faq.jsx';
import Terms from './components/pages/Terms.jsx';
import PostsList from './components/PostsList.jsx';
import AddPostForm from './components/AddPostForm.jsx';

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
          <Route path="/terms-conditions" element={< Terms />} />
          <Route path="/faq" element={<Faq/>} />
          <Route path="/postslist" element={<PostsList/>} />
          <Route path="/addpost" element={<AddPostForm/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}