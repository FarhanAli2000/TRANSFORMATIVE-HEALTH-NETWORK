"use client"

import Navbar from "../component/Navbar";
import Comprehensive from "../component/Comprehensive";
import Revolutionizing from "../component/Revolutionizing";
import Testimonials from "../component/Testimonials";
import CompanyStats from "../component/CompanyStats";
import HealthcareExpert from "../component/HealthcareExpert";
import Ourfounder from "../component/Ourfounder";
import Footer from "../component/Footer";
import BackToTop from "../component/BackToTop";


export default function AboutPage() {
    return (
        <div>
            <Navbar />
            <Comprehensive />
            <Revolutionizing />
            <Testimonials />
            <CompanyStats />
            <HealthcareExpert />
            <Ourfounder />
            <Footer />
            <BackToTop />
        </div>
    );
}
