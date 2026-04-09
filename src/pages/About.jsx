import React from "react";

const Card = ({ title, description, icon }) => (
  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center hover:border-blue-500 transition">
    {icon && <div className="text-3xl mb-3">{icon}</div>}
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Stat = ({ number, label }) => (
  <div className="text-center">
    <h3 className="text-3xl font-bold text-blue-400">{number}</h3>
    <p className="text-gray-400">{label}</p>
  </div>
);

const TeamMember = ({ initials, role }) => (
  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
    <div className="w-14 h-14 mx-auto mb-3 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
      {initials}
    </div>
    <h3 className="font-semibold text-white">{role}</h3>
  </div>
);

export default function LandingPage() {
  return (
    <div className="bg-black text-gray-200 font-sans">

      {/* Hero */}
      <section className="bg-linear-to-r from-gray-900 via-black to-gray-900 text-center py-24 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Build Faster. Grow Smarter. Deliver Better.
        </h1>
        <p className="text-lg text-gray-400">
          We empower businesses with reliable solutions and seamless experiences.
        </p>
      </section>

      {/* Story & Mission */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          Our Story & Mission
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card
            title="Our Story"
            description="We started with a simple idea and grew into a mission-driven company solving real-world problems."
          />
          <Card
            title="Our Mission"
            description="Deliver high-quality, efficient, and trustworthy services that help customers succeed."
          />
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-950 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          Core Values
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          <Card title="Quality" icon="⭐" description="We never compromise on standards." />
          <Card title="Speed" icon="⚡" description="Fast and efficient delivery." />
          <Card title="Trust" icon="🤝" description="Built on transparency and reliability." />
          <Card title="Support" icon="💬" description="Always here to help you." />
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          Our Impact
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Stat number="10,000+" label="Customers" />
          <Stat number="500+" label="Products" />
          <Stat number="8+" label="Years Experience" />
          <Stat number="98%" label="Satisfaction" />
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-950 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          Leadership Team
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          <TeamMember initials="AK" role="Founder & CEO" />
          <TeamMember initials="RS" role="Head of Operations" />
          <TeamMember initials="MP" role="Lead Developer" />
          <TeamMember initials="ST" role="Customer Success" />
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Ready to get started?
        </h2>
        <p className="text-gray-400 mb-6">
          Let’s build something great together.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
            Get in Touch
          </button>
          <button className="bg-gray-800 text-gray-200 px-6 py-3 rounded-lg hover:bg-gray-700 transition">
            Request a Demo
          </button>
        </div>
      </section>

    </div>
  );
}