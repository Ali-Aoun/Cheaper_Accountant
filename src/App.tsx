import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import FreeSoftware from './pages/FreeSoftware';
import ProfessionalBodies from './pages/ProfessionalBodies';
import Blog from './pages/Blog';
import OnlineAccounting from './pages/OnlineAccounting';
import Quote from './pages/Quote';
import Reviews from './pages/Reviews';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/free-software" element={<FreeSoftware />} />
            <Route path="/professional-bodies" element={<ProfessionalBodies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/online-accounting" element={<OnlineAccounting />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}