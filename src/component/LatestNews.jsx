

import React from "react";

const newsData = [
    {
        id: 1,
        date: "16 January",
        title: "Customer group one",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
        image: "/images/News/News1.jpg",
    },
    {
        id: 2,
        date: "18 January",
        title: "Customer group one",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
        image: "/images/News/News2.jpg",
    },
    {
        id: 3,
        date: "20 January",
        title: "Customer group one",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
        image: "/images/News/News3.jpg",
    },
];

export default function LatestNews() {
    return (
        <section className="bg-gradient-to-b from-[#F5F8FF] to-[#E8F0FF] py-20">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                    What is happening
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Latest News</h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Hear from our clients on how Transformative Health Network has
                    delivered measurable impact and strategic value.
                </p>

                {/* News Cards */}
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {newsData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6 text-left">
                                <span className="inline-block text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-md">
                                    {item.date}
                                </span>
                                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                                <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
                                <button className="mt-4 inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-sm font-medium shadow-md">
                                    Read now →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
