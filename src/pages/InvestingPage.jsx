"use client";

import Navbar from "../component/Navbar";
import HealthcareExpert from "../component/HealthcareExpert";
import Footer from "../component/Footer";
import InvestingSection from "../component/InvestingSection";


export default function InvestingPage() {
    return (
        <div>
            <Navbar />
            <InvestingSection />
            <HealthcareExpert />
            <Footer />
        </div>
    );
}
