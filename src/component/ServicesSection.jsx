
import { motion } from "framer-motion";
import { FaProjectDiagram, FaChartBar, FaHandshake } from "react-icons/fa";

export default function ServicesSection() {
    const services = [
        {
            icon: <FaProjectDiagram className="text-blue-600 w-10 h-10" />,
            title: "Consulting & Networking",
            description:
                "To assist with compliance, product development, and operations, we link our clients with reputable medical consultants and healthcare IT specialists. Perfect for clinics, startups, or anyone looking for strategic advice on healthcare.",
            link: "#",
        },
        {
            icon: <FaChartBar className="text-blue-600 w-10 h-10" />,
            title: "Investment and Growth",
            description:
                "We support the expansion of early-stage healthcare businesses by giving them access to R&D resources, staffing solutions, real estate assistance, and health tech funding, all of which are intended to help them scale operations steadily and confidently.",
            link: "#",
        },
        {
            icon: <FaHandshake className="text-blue-600 w-10 h-10" />,
            title: "Non-Profit and Awareness",
            description:
                "We offer free CEUs and CME programs, grand rounds, and mentorship opportunities to support ongoing education, professional growth, and global healthcare access for students, providers, and underserved communities.",
            link: "#",
        },
    ];

    // Animations
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const cardVariant = {
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    return (
        <section className="py-16 bg-white">
            {/* Top Headline + Paragraph Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8 mb-16"
            >
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold leading-snug text-black">
                        Headline that<br />highlights
                    </h2>
                </div>
                <div className="md:w-1/2 text-gray-700">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum
                        eleifend eros a pharetra. Cras aliquam vestibulum vehicula. Sed sed
                        lectus risus. Vestibulum maximus ex purus in tincidunt. In venenatis
                        lacus urna, id porta risus semper quis. Aenean vel posuere urna, sit
                        amet placerat massa. Quisque efficitur interdum libero, sed dictum
                        lorem euismod sed.
                    </p>
                </div>
            </motion.div>

            {/* Services Cards */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariant}
                        whileHover={{
                            scale: 1.07,
                            boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
                        }}
                        className="bg-gray-50 p-6 rounded-2xl shadow transition cursor-pointer"
                    >
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: [0, -10, 10, -5, 0] }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-xl mb-6 mx-auto"
                        >
                            {service.icon}
                        </motion.div>

                        <h3 className="text-xl font-semibold text-center mb-4">
                            {service.title}
                        </h3>
                        <p className="text-gray-600 text-center mb-6">
                            {service.description}
                        </p>

                        <div className="text-center">
                            <motion.a
                                whileHover={{ x: 6 }}
                                transition={{ type: "tween", duration: 0.3 }}
                                href={service.link}
                                className="text-blue-600 font-medium inline-flex items-center gap-2 hover:underline"
                            >
                                Learn More →
                            </motion.a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
