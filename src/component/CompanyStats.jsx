"use client"

export default function CompanyStats() {
    return (
        <section className="relative bg-gradient-to-b from-[#ABBFF2] to-[#EBF2FF] py-20 overflow-hidden">
            {/* Background Boxes */}
            <div className="absolute top-6 left-6 w-10 h-10 bg-[#3B82F6] rotate-45 rounded-sm"></div>
            <div className="absolute top-20 left-20 w-6 h-6 bg-[#3B82F6] rotate-45 rounded-sm"></div>
            <div className="absolute bottom-10 left-10 w-8 h-8 bg-[#3B82F6] rotate-45 rounded-sm"></div>
            <div className="absolute bottom-24 left-20 w-6 h-6 bg-[#3B82F6] rotate-45 rounded-sm"></div>

            <div className="absolute top-10 right-10 w-8 h-8 bg-[#3B82F6] rotate-45 rounded-sm"></div>
            <div className="absolute top-24 right-20 w-6 h-6 bg-[#3B82F6] rotate-45 rounded-sm"></div>
            <div className="absolute bottom-12 right-12 w-10 h-10 bg-[#3B82F6] rotate-45 rounded-sm"></div>
            <div className="absolute bottom-24 right-20 w-6 h-6 bg-[#3B82F6] rotate-45 rounded-sm"></div>

            {/* Stats Card */}
            <div className="relative max-w-6xl mx-auto px-6">
                <div className="bg-white shadow-xl rounded-2xl p-10 text-center">
                    <p className="text-blue-500 text-sm font-semibold uppercase tracking-wider">
                        Company Stats
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-10">
                        Learn More About Us In Numbers
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {/* Stat 1 */}
                        <div>
                            <h3 className="text-3xl font-bold text-blue-600">50+</h3>
                            <p className="text-gray-700 mt-2">Cases Completed</p>
                        </div>

                        {/* Stat 2 */}
                        <div>
                            <h3 className="text-3xl font-bold text-blue-600">90+</h3>
                            <p className="text-gray-700 mt-2">Total Consultants</p>
                        </div>

                        {/* Stat 3 */}
                        <div>
                            <h3 className="text-3xl font-bold text-blue-600">100%</h3>
                            <p className="text-gray-700 mt-2">Satisfied Customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
