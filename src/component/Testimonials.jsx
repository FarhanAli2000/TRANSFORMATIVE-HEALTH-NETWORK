"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
        name: "Name Surname",
        position: "Position, Company name",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
        name: "Name Surname",
        position: "Position, Company name",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
        name: "Name Surname",
        position: "Position, Company name",
        image: "https://randomuser.me/api/portraits/men/18.jpg",
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
        name: "Name Surname",
        position: "Position, Company name",
        image: "https://randomuser.me/api/portraits/women/25.jpg",
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
        name: "Name Surname",
        position: "Position, Company name",
        image: "https://randomuser.me/api/portraits/men/64.jpg",
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
        name: "Name Surname",
        position: "Position, Company name",
        image: "https://randomuser.me/api/portraits/men/12.jpg",
    },
];

export default function Testimonials() {
    return (
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                    What Clients Say
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                    Our Testimonials
                </h2>
                <p className="text-gray-600">
                    Hear from our clients on how Transformative Health Network has
                    delivered measurable impact and strategic value.
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="p-6 rounded-xl shadow-md bg-white border border-gray-100 flex flex-col h-full">
                            <div className="flex text-yellow-400 mb-3">
                                {Array(5)
                                    .fill(0)
                                    .map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                "{testimonial.text}"
                            </p>
                            <div className="flex items-center gap-3 mt-auto">
                                {testimonial.image && (
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                )}
                                <div>
                                    <p className="font-semibold text-gray-800">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {testimonial.position}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
