

import { Star } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="flex flex-col md:flex-row items-center px-10 py-16 max-w-full mx-auto bg-[#F5F8FF]">
            {/* Left Side - Text */}
            <div className="flex-1">
                <p className="text-[#1EA0E6] font-semibold">
                    Transformative Health Network
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
                    Transformative <br /> Health Network
                </h1>
                <p className="text-gray-600 mt-4 max-w-lg">
                    We bridge the gap between healthcare professionals and innovation,
                    helping startups grow, guiding investments, and empowering progress
                    through expert consulting and transformative education.
                </p>

                {/* Buttons */}
                <div className="mt-6 flex gap-4">
                    <button className="px-6 py-3 bg-[#1EA0E6] text-white rounded-lg shadow hover:bg-blue-700 transition">
                        Request a Free Consultation →
                    </button>
                    <button className="px-6 py-3 border border-[#1EA0E6] text-[#1EA0E6] rounded-lg hover:bg-blue-50 transition">
                        Explore Our Services →
                    </button>
                </div>

                {/* Contact */}
                <div className="mt-6">
                    <button className="flex items-center gap-2 bg-[#0FA958] text-white px-5 py-3 rounded-full shadow-lg">
                        <span>📞</span> Contact Us Now
                    </button>
                </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 relative mt-12 md:mt-0 flex justify-center">
                <img
                    src="/images/doctors.jpg"
                    alt="Doctors"
                    className="rounded-b-full object-cover w-[500px] h-[600px]"
                />

                {/* Testimonial Card */}
                <div className="absolute bottom-6 left-0 bg-white shadow-lg rounded-xl px-6 py-4 w-64">
                    <p className="text-[#1EA0E6] font-bold text-2xl">12,345</p>
                    <div className="flex text-yellow-500 my-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={18} fill="gold" stroke="gold" />
                        ))}
                    </div>
                    <p className="text-gray-600 text-sm">
                        "A customer testimonial that highlights features and answers"
                    </p>
                </div>
            </div>
        </section>
    );
}
