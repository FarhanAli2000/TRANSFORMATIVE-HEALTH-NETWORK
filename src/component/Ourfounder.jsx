"use client";

import { Linkedin, Globe, X } from "lucide-react";
import { useState } from "react";

const teamMembers = [
  {
    name: "Dr. Kevin Dang, MD, MBA",
    title: "Founder & CEO",
    image: "/images/About/member1.png",
    description:
      "Visionary healthcare leader with a background in medicine, business, and innovation. Dr. Dang has built clinical training sites, led hospital strategy, and driven startup growth across communities. He is from California and graduated with highest honors in Human Biology from UC Merced, where he also assisted in starting medical volunteer and student government programs. After gaining experience in emergency response and hospital operations, he went on to earn a summa cum laude MBA in Data Analytics. Later, he helped create a new clinical training facility at the International University of Health Sciences, where he also earned his MD. Dr. Dang has extensive experience in strategy, program development, and healthcare innovation from his leadership positions at the Oye Global Medical Foundation, Raleigh General Hospital, and the Beckley VA. Known for building impactful programs and creating opportunity, Dr. Dang brings visionary leadership and a passion for transforming healthcare.",
  },
  {
    name: "Dr. Cristo Lamprakos, MD",
    title: "Chief Medical Officer",
    image: "/images/About/member3.png",
    description:
      " Surgical resident and medical educator. Lamprakos leads clinical strategy, drives quality assurance, and advances education across Transformative Health Network’s initiatives.At Marshfield Clinic Health System, Dr. Cristo Lamprakos is a surgical resident and a doctor with a strong sense of purpose. He brings practical clinical experience and a strong passion for innovation, education, and fair access to healthcare as a graduate of Avalon University School of Medicine. Using her background as a Certified Nursing Assistant and her experience organizing national Grand Rounds and surgical workshops, Dr. Lamprakos worked in both rural and urban healthcare settings before joining Transformative Health Network. He has given presentations on everything from public health to vascular surgery.He oversees clinical operations, quality control, and medical strategy at Transformative Health Network, guaranteeing excellence and influence throughout services. His commitment to global health, outreach, and mentoring supports the organization's goal of transforming healthcare via innovation, teamwork, and education.",
  },
  {
    name: "Full name",
    title: "Job title",
    image: "/images/About/member2.png",
    description:
      "Mr. Ally A. R. Lasu is currently a 3rd year medical student at St. George University and is an accomplished global health professional with over a decade of experience managing and supporting international and U.S. domestic public health programs. His expertise spans a wide range of focus areas, including overseeing program and financial management for initiatives spanning HIV/AIDS, tuberculosis, malaria, maternal and child health, and health systems strengthening.With a proven track record in program design, implementation, and evaluation, Lasu specializes in strategic planning, budgeting, resource mobilization, capacity building, and stakeholder engagement. His career has taken him across East Africa, including Kenya, Uganda, Tanzania, Rwanda, and South Sudan, where he has successfully partnered with diverse stakeholders to drive impactful health outcomes. He is fluent in Kiswahili, Luganda, and Juba Arabic, which enables him to connect meaningfully with the communities he serves.Lasu holds a Bachelor of Dental Surgery, BDS, from Makerere University in 2003 and a Master of Public Health from the Hebrew University of Jerusalem in 2011, where he was recognized as a PEARS Scholar. As a published researcher, he has contributed several peer-reviewed scientific articles advancing knowledge in global health.",
  },
];

export default function Ourfounder() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="bg-gradient-to-b from-[#E8F0FB] to-white py-16">
      <div className="max-w-6xl mx-auto text-center px-6">
        <p className="text-sm text-blue-600 font-semibold tracking-wide">
          OUR FOUNDER
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">What We Do</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We connect innovation with execution through expert consulting,
          startup growth solutions, and global healthcare education.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              onClick={() => setSelectedMember(member)}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col cursor-pointer hover:shadow-lg transition"
            >
              <div className="w-full h-72 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.title}</p>
                <p className="text-gray-600 text-sm mt-3 flex-grow line-clamp-3">
                  {member.description}
                </p>
                {/* Social Icons */}
                <div className="flex space-x-7 mt-4 justify-center">
                  <a href="/" className="text-gray-500 hover:text-blue-600 transition">
                    <Linkedin size={20} />
                  </a>
                  <a href="/" className="text-gray-500 hover:text-black transition">
                    <X size={20} />
                  </a>
                  <a href="/" className="text-gray-500 hover:text-purple-600 transition">
                    <Globe size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-lg max-w-2xl w-full p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-40 h-40 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-2xl font-bold">{selectedMember.name}</h3>
                <p className="text-sm text-gray-500">{selectedMember.title}</p>
                <p className="text-gray-700 mt-4">{selectedMember.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
