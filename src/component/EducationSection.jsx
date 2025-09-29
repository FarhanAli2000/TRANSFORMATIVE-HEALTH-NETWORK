
"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function EducationSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { question: "Tristique sit amet condim vel?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non nulla eget libero ultrices tincidunt." },
        { question: "Tristique sit amet condim vel?", answer: "Praesent suscipit nunc vel eros facilisis, vel ultrices erat dictum. Nulla facilisi." },
        { question: "Tristique sit amet condim vel?", answer: "Sed quis urna euismod, aliquam metus id, faucibus nibh. Aliquam erat volutpat." },
        { question: "Tristique sit amet condim vel?", answer: "Aenean dapibus sem nec sapien pellentesque, nec porta risus posuere." },
        { question: "Tristique sit amet condim vel?", answer: "Curabitur rhoncus odio non dui hendrerit, at aliquam libero porttitor." },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-gradient-to-b from-white to-blue-100 py-20 px-6 md:px-20">
            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto mb-12">
                <p className="text-blue-600 font-semibold tracking-wide mb-2">
                    OUR VISION & MISSION
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
                <p className="text-gray-600">
                    We connect innovation with execution through expert consulting, startup
                    growth solutions, and global healthcare education.
                </p>
            </div>

            {/* Accordion Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        className="bg-white shadow-md rounded-lg"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <button
                            className="w-full flex justify-between items-center p-4 font-semibold text-left"
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronDown className="w-5 h-5 text-gray-500" />
                            </motion.div>
                        </button>

                        {/* Answer */}
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="px-4 pb-4 text-gray-600"
                                >
                                    {faq.answer}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
