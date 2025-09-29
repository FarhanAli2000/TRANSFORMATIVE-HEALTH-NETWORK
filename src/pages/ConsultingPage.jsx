

import Navbar from "../component/Navbar";
import HealthcareExpert from "../component/HealthcareExpert";
import Footer from "../component/Footer";
import ConsultationForm from "../component/ConsultationForm";
import ServicesSection from "../component/ServicesSection";

export default function ConsultingPage() {
    return (
        <div>
            <Navbar />
            <ServicesSection />
            <ConsultationForm />
            <HealthcareExpert />
            <Footer />
        </div>
    );
}
