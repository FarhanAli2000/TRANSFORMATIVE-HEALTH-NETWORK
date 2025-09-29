"use client";

export default function AboutSection() {
    return (
        <section className="flex flex-col md:flex-row items-center gap-12 px-10 py-20 max-w-7xl mx-auto">
            {/* Left Side - Image */}
            <div className="flex-1 flex justify-center">
                <img
                    src="/images/about-pic.png" // replace with your image path
                    alt="About Transformative Health Network"
                    className="w-[400px] h-[450px] object-cover rounded-b-full shadow-lg"
                />
            </div>

            {/* Right Side - Text */}
            <div className="flex-1">
                <p className="text-[#1EA0E6] text-sm font-semibold uppercase tracking-wide">
                    Our Vision & Mission
                </p>
                <h2 className="text-4xl font-bold text-gray-900 mt-2">
                    About Transformative Health Network 
                </h2>
                <p className="text-gray-600 mt-4 leading-relaxed">
                    Transformative Health Network is a purpose-driven health consulting
                    company focused on making meaningful connections. We bring healthcare
                    professionals together with the people, startups, and organizations
                    that need their expertise most. From fueling medical innovation to
                    supporting new ventures and expanding access to global healthcare
                    education, we’re here to move the industry forward one connection at a
                    time.
                </p>

                {/* Button */}
                <div className="mt-6">
                    <button className="px-6 py-3 bg-[#1EA0E6] text-white rounded-lg shadow hover:bg-blue-700 transition flex items-center gap-2">
                        Learn More →
                    </button>
                </div>
            </div>
        </section>
    );
}
