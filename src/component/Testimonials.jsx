
import { motion } from "framer-motion";

const testimonials = [
  { text: "Lorem ipsum dolor sit amet.", name: "John Doe", position: "CEO, Company A", image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { text: "Suspendisse varius enim in eros.", name: "Jane Smith", position: "CTO, Company B", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { text: "Duis cursus, mi quis viverra ornare.", name: "Alex Johnson", position: "Manager, Company C", image: "https://randomuser.me/api/portraits/men/18.jpg" },
  { text: "Donec ullamcorper nulla non metus.", name: "Emily Brown", position: "Designer, Company D", image: "https://randomuser.me/api/portraits/women/25.jpg" },
  { text: "Curabitur blandit tempus porttitor.", name: "Michael Lee", position: "Developer, Company E", image: "https://randomuser.me/api/portraits/men/64.jpg" },
  { text: "Vivamus sagittis lacus vel augue.", name: "Sophia Wilson", position: "Marketer, Company F", image: "https://randomuser.me/api/portraits/women/12.jpg" },
  { text: "Etiam porta sem malesuada magna.", name: "Daniel White", position: "Founder, Company G", image: "https://randomuser.me/api/portraits/men/55.jpg" },
  { text: "Aenean lacinia bibendum nulla.", name: "Olivia Taylor", position: "Engineer, Company H", image: "https://randomuser.me/api/portraits/women/36.jpg" },
];

// ✅ Card Component
const Card = ({ testimonial }) => (
  <div className="w-80 flex-shrink-0 p-6 rounded-xl shadow-md bg-white border border-gray-100 flex flex-col mx-4">
    <div className="flex text-yellow-400 mb-3">
      {Array(5).fill(0).map((_, i) => <span key={i}>★</span>)}
    </div>
    <p className="text-gray-600 text-sm leading-relaxed mb-4">
      "{testimonial.text}"
    </p>
    <div className="flex items-center gap-3 mt-auto">
      <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
      <div>
        <p className="font-semibold text-gray-800">{testimonial.name}</p>
        <p className="text-sm text-gray-500">{testimonial.position}</p>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white overflow-hidden">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
          What Clients Say
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
          Our Testimonials
        </h2>
        <p className="text-gray-600">
          Hear from our clients on how Transformative Health Network has delivered measurable impact and strategic value.
        </p>
      </div>

      {/* ✅ Row 1 - Left to Right */}
      <div className="relative overflow-hidden mb-10">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <Card key={i} testimonial={t} />
          ))}
        </motion.div>
      </div>

      {/* ✅ Row 2 - Right to Left */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: ["-100%", "0%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <Card key={i} testimonial={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
