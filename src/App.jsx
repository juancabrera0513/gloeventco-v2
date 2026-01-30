// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import SilentDisco from "./pages/SilentDisco";
import PhotoBooth from "./pages/PhotoBooth";

import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

import CalendarPage from "./pages/Calendar";

// ✅ Admin (UN solo calendar, protegido)
import AdminLogin from "./pages/AdminLogin";
import AdminCalendar from "./pages/admin/AdminCalendar";
import AdminGuard from "./components/AdminGuard";

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <ScrollToTop behavior="auto" />

      <main className="flex-1">
        <Routes>
          {/* Main */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/silent-disco" element={<SilentDisco />} />
          <Route path="/services/photo-booth" element={<PhotoBooth />} />
          <Route path="/contact" element={<Contact />} />

{/* ✅ Events (public) */}
<Route path="/events" element={<CalendarPage />} />


          {/* 🔒 Admin */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/calendar"
            element={
              <AdminGuard>
                <AdminCalendar />
              </AdminGuard>
            }
          />

          {/* Company / Legal */}
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
