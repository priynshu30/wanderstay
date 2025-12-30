import React from "react";

const teamMembers = [
  {
    name: "Priya Sharma",
    role: "Co-founder & CEO",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Rohan Verma",
    role: "Co-founder & CTO",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Anjali Singh",
    role: "Marketing Head",
    image:
      "https://randomuser.me/api/portraits/women/45.jpg",
  },
];

const investors = [
  { name: "Alpha Ventures" },
  { name: "Beta Capital" },
  { name: "Gamma Partners" },
];

const About = () => {
  return (
    <div className="pt-20 max-w-6xl mx-auto px-6">
      {/* Company Intro */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">About WanderStay</h1>
        <p className="text-gray-700 text-lg">
          WanderStay is your ultimate travel companion. We help travelers
          discover hotels, plan trips, and make every journey memorable.
          Our platform is designed with love, using modern web technologies
          for a seamless experience.
        </p>
      </section>

      {/* Team Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white shadow rounded-lg p-4 flex flex-col items-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="font-bold text-xl">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Investors Section */}
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Investors & Partners</h2>
        <div className="flex justify-center flex-wrap gap-6">
          {investors.map((inv, idx) => (
            <div
              key={idx}
              className="bg-gray-100 px-4 py-2 rounded shadow text-gray-700 font-semibold"
            >
              {inv.name}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
