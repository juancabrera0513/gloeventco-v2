// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Services from "./pages/Services";
// import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import SilentDisco from "./pages/SilentDisco";
import PhotoBooth from "./pages/PhotoBooth";

import Availability from "./pages/Availability";

import Showcase from "./pages/Showcase";




export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      {/* Default head tags (puedes sobreescribir en cada página) */}
      <title>Glo Event Co | St. Louis Parties</title>
      <meta
        name="description"
        content="Silent disco & modern photo booth rentals in St. Louis. Transform your event with Glo Event Co."
      />

      <Header />

      {/* Debe ir dentro del Router (App ya está envuelto por BrowserRouter en main.jsx) */}
      <ScrollToTop behavior="auto" />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/silent-disco" element={<SilentDisco />} />
          <Route path="/services/photo-booth" element={<PhotoBooth />} />

          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          
          <Route path="/availability" element={<Availability />} />
          <Route path="/showcase" element={<Showcase />} />


        </Routes>
      </main>

      <Footer />
    </div>
  );
}
