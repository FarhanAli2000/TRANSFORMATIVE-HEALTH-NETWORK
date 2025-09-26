import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import AboutSection from "./component/AboutSection";
import WhatWeDo from "./component/WhatWeDo";
import Transformative from "./component/Transformative";
import WhatSetsUsApart from "./component/WhatSetsUsApart";
import Testimonials from "./component/Testimonials";
import LogoCarousel from "./component/LogoCarousel";
import HealthcareExpert from "./component/HealthcareExpert";
import LatestNews from "./component/LatestNews";
import Footer from "./component/Footer";


import AboutPage from "./pages/AboutPage";
import ConsultingPage from "./pages/ConsultingPage";
import EducationPage from "./pages/EducationPage";
import InvestingPage from "./pages/InvestingPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./LoginPage";
function App() {
  return (
    <Routes>
      {/* Home Page */}
      <Route
        path="/"
        element={
          <div>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <WhatWeDo />
            <Transformative />
            <WhatSetsUsApart />
            <Testimonials />
            <LogoCarousel />
            <HealthcareExpert />
            <LatestNews />
            <Footer />
          </div>
        }
      />

      {/* About Page */}
      <Route path="/about" element={<AboutPage />} />
      <Route path="/consulting" element={<ConsultingPage />} />
      <Route path="/education" element={<EducationPage />} />
      <Route path="/investing" element={<InvestingPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
