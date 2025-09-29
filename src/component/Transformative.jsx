

export default function Transformative() {
    return (
        <section className="flex flex-col md:flex-row-reverse items-center gap-12 px-10 py-20 max-w-7xl mx-auto">
            {/* Right Side - Image */}
            <div className="flex-1 flex justify-center relative animate-fadeInRight">
                <img
                    src="/images/menvswomen.jpg"
                    alt="Transformative Health"
                    className="w-[400px] h-[450px] object-cover rounded-t-full shadow-lg animate-floatZoom"
                />

                {/* Decorative circle or stethoscope */}
                <img
                    src="/images/scissor.png"
                    alt="Decoration"
                    className="absolute -left-16 bottom-6 w-40 hidden md:block animate-bounce-slow"
                />
            </div>

            {/* Left Side - Text Content */}
            <div className="flex-1 animate-fadeInUp">
                <p className="text-[#1EA0E6] text-sm font-semibold uppercase tracking-wide">
                    Transformative Impact
                </p>
                <h2 className="text-4xl font-bold text-gray-900 mt-2">
                    Building the Future of Healthcare Together
                </h2>
                <p className="text-gray-600 mt-4 leading-relaxed">
                    At Transformative Health Network, our mission goes beyond consulting.
                    We’re here to empower healthcare innovators, bridge the gap between
                    medical professionals and organizations, and accelerate access to
                    cutting-edge health solutions. Together, we’re creating a healthier,
                    more connected world.
                </p>

                {/* CTA Button */}
                <div className="mt-6">
                    <button className="px-6 py-3 bg-[#1EA0E6] text-white rounded-lg shadow hover:bg-blue-700 transition-transform transform hover:scale-110">
                        Discover More →
                    </button>
                </div>
            </div>
        </section>
    );
}
