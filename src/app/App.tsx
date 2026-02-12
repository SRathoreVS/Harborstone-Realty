import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Home from "@/pages/Home";
import ListingsPage from "@/pages/Listings";
import PropertyDetails from "@/pages/PropertyDetails";
import Contact from "@/pages/Contact";
import AgentProfile from "@/pages/AgentProfile";
import AgentsPage from "@/pages/AgentsPage";
import Investments from "@/pages/Investments";
import About from "@/pages/About";

export default function App() {
  return (
    <BrowserRouter>
      {/* Always visible */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<ListingsPage />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/agents/:id" element={<AgentProfile />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Always visible */}
      <Footer />
    </BrowserRouter>
  );
}
