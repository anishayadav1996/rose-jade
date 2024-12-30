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
import MerchantcashAdvanc from './components/pages/MerchantcashAdvanc.jsx';
import EquipmentFinancing from './components/pages/EquipmentFinancing.jsx';
import Lineofcredit from './components/pages/Lineofcredit.jsx';
import BlogSearch from './components/pages/blogs/BlogSearch.jsx';
import CategoryBlogsPage from './components/pages/blogs/CategoryBlogsPage.jsx';
import SearchResultsPage from './components/pages/blogs/SearchResultsPage.jsx';
import BlogListByTag from './components/pages/blogs/BlogListByTag.jsx';
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
          <Route path="/merchant-cash" element={<MerchantcashAdvanc/>} />
          <Route path="/equipment-financing" element={<EquipmentFinancing/>} />
          <Route path="/line-of-credit" element={<Lineofcredit/>} />
          <Route path="/search" element={<BlogSearch/>} />
          <Route path="/blogs/category/:categoryId" element={<CategoryBlogsPage/>} />
          <Route path="/search-results" element={<SearchResultsPage/>} />
          <Route path="/blogs/tag/:tag" element={<BlogListByTag />} />
        </Routes>
        {/* <Editor /> */}
        <Footer />
      </Router>
      
    </div>
  )
}