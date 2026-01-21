// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import SilentDisco from "./pages/SilentDisco";
import PhotoBooth from "./pages/PhotoBooth";

import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms"; // ✅ ADD

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <title>Glo Event Co | St. Louis Parties</title>
      <meta
        name="description"
        content="Silent disco & modern photo booth rentals in St. Louis. Transform your event with Glo Event Co."
      />

      <Header />
      <ScrollToTop behavior="auto" />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/silent-disco" element={<SilentDisco />} />
          <Route path="/services/photo-booth" element={<PhotoBooth />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />

          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} /> {/* ✅ ADD */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
