import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import ApplyNow from './pages/ApplyNow';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';
import TestimonialsPage from './pages/TestimonialsPage';
import NewsletterPopup from './components/NewsletterPopup';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply-now" element={<ApplyNow />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
        </Routes>
        <NewsletterPopup />
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
