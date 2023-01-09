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

function App() {
  return (
    <div className="container mx-auto">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<OurServies />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/branding" element={<BrandingProductDev />} />
        <Route path="/advisory" element={<BusinessAdvisory />} />
        <Route path="/continuity" element={<BusinessContinuity />} />
        <Route path="/reconstruction" element={<BusinessReconstruction />} />
        <Route path="/consulting" element={<ConsultingServices />} />
        <Route path="/governance" element={<CorporateGovernance />} />
        <Route path="/tax" element={<TaxPlanning />} />
        <Route path="/training" element={<Training />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
