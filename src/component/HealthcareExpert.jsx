

export default function HealthcareExpert() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left Side */}
            <div>
                <p className="text-blue-600 text-sm font-medium mb-2">
                    Join the Expert Network
                </p>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Are You a Healthcare Expert?
                </h2>
                <p className="text-gray-600 mb-6">
                    Join our expert network to contribute your knowledge, mentor startups,
                    or speak at events.
                </p>

                <img
                    src="/images/HealthCare.jpg" // apna image path lagao
                    alt="Healthcare Experts"
                    className="rounded-lg shadow-lg w-full max-w-md"
                />
            </div>

            {/* Right Side - Form */}
            <div className="bg-white">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Request a Call Back
                </h3>
                <form className="space-y-4">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* Subject */}
                    <input
                        type="text"
                        placeholder="Subject"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                    {/* Description */}
                    <textarea
                        placeholder="Description"
                        rows="4"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    ></textarea>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition flex items-center gap-2"
                    >
                        Submit →
                    </button>
                </form>
            </div>
        </section>
    );
}
