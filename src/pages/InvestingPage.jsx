"use client"

import Navbar from "../component/Navbar";
import HealthcareExpert from "../component/HealthcareExpert";
import Footer from "../component/Footer";
import InvestingSection from "../component/InvestingSection";
import BackToTop from "../component/BackToTop";


export default function InvestingPage() {
    return (
        <div>
            <Navbar />
            <InvestingSection />
            <HealthcareExpert />
            <Footer />
             <BackToTop />
        </div>
    );
}
