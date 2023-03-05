import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import OurServies from "./pages/OurServies";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import BrandingProductDev from "./pages/Services/BrandingProductDev";
import BusinessAdvisory from "./pages/Services/BusinessAdvisory";
import BusinessContinuity from "./pages/Services/BusinessContinuity";
import BusinessReconstruction from "./pages/Services/BusinessReconstruction";
import ConsultingServices from "./pages/Services/ConsultingServices";
import CorporateGovernance from "./pages/Services/CorporateGovernance";
import TaxPlanning from "./pages/Services/TaxPlanning";
import Training from "./pages/Services/Training";
import Schedule from "./pages/Schedule";
import TestForm from "./pages/TestForm";

function App() {
  return (
    <div className="container mx-auto">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/tax" element={<TaxPlanning />} />
        <Route path="/form" element={<TestForm />} />
        <Route path="/training" element={<Training />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<OurServies />} />
        <Route path="/advisory" element={<BusinessAdvisory />} />
        <Route path="/branding" element={<BrandingProductDev />} />
        <Route path="/consulting" element={<ConsultingServices />} />
        <Route path="/continuity" element={<BusinessContinuity />} />
        <Route path="/governance" element={<CorporateGovernance />} />
        <Route path="/reconstruction" element={<BusinessReconstruction />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
