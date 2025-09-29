"use client"

import Navbar from "../component/Navbar";
import HealthcareExpert from "../component/HealthcareExpert";
import Footer from "../component/Footer";
import Educationvision from "../component/Educationvision";
import EducationSection from "../component/EducationSection";


export default function EducationPage() {
    return (
        <div>
            <Navbar />
            <Educationvision />
            <EducationSection />
            <HealthcareExpert />
            <Footer />
        </div>
    );
}
