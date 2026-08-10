import Button from "../ui/Button";
import { consultants } from "../../constants/consultants";
import { medicalFeatures } from "../../constants/medicalFeatures";

const Consultants = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14 md:py-20">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-dark text-center mb-12 max-w-2xl mx-auto leading-tight">
        Collaborate with our best consultant by online
      </h2>

      {/* Consultant cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
        {consultants.map((consultant) => (
          <div
            key={consultant.id}
            className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
          >
            <img
              src={consultant.avatar}
              alt={consultant.name}
              className="w-14 h-14 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-bold text-dark">{consultant.name}</h3>
            <p className="text-sm text-gray-text mb-3">{consultant.role}</p>
            <div className="w-8 h-0.5 bg-primary mb-3" />
            <p className="text-sm text-gray-text mb-6">{consultant.bio}</p>
            <button
              aria-label={`View ${consultant.name}'s profile`}
              className="w-10 h-10 rounded-full bg-primary hover:bg-primary-dark text-white flex items-center justify-center transition-colors"
            >
              →
            </button>
          </div>
        ))}
      </div>

      {/* Description + CTA */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-lg md:text-xl text-gray-text leading-relaxed mb-8">
          <span className="text-dark font-semibold">Patients</span> can
          consult with{" "}
          <span className="text-dark font-semibold">healthcare providers</span>{" "}
          from the comfort of{" "}
          <span className="text-dark font-semibold">their homes</span>,
          eliminating travel time and costs. Reduced waiting times.
        </p>
        <div className="flex justify-center">
          <Button variant="primary" icon={<span>→</span>}>
            Book a Consultation
          </Button>
        </div>
      </div>

      {/* Map + Additional Features */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Map card */}
        <div className="relative rounded-3xl overflow-hidden bg-gray-100 min-h-[360px]">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=900&auto=format&fit=crop&q=60"
            alt="Map showing nearby doctors"
            className="w-full h-full object-cover"
          />

          <div className="absolute top-4 left-4 right-4 sm:right-auto bg-white rounded-xl shadow-lg p-4 max-w-[220px]">
            <div className="flex items-center gap-2 mb-2">
              <img
                src="https://i.pravatar.cc/60?img=14"
                alt="Dr. Miles"
                className="w-9 h-9 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-dark">Dr. Miles</p>
                <p className="text-xs text-gray-text">Cardiologist</p>
              </div>
              <span className="ml-auto text-xs font-semibold text-dark flex items-center gap-1">
                ⭐ 4.9
              </span>
            </div>
            <p className="text-xs text-gray-text mb-1">📅 20 May, 2024</p>
            <p className="text-xs text-gray-text mb-3">🕒 10:00 AM · 🎥 Video Consultation</p>
            <Button variant="primary" className="w-full justify-center text-xs py-2">
              Book Appointment
            </Button>
          </div>

          <div className="absolute bottom-6 left-6 bg-white/95 rounded-xl px-4 py-2 flex items-center gap-2 text-xs font-semibold text-dark">
            🛡️ 10k+ Patients Consulted
          </div>
        </div>

        {/* Additional Features */}
        <div className="bg-bg-soft rounded-3xl p-8">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-xl mb-5">
            💼
          </div>
          <h3 className="text-2xl font-bold text-dark mb-3">
            Additional Medical Features
          </h3>
          <p className="text-gray-text text-sm mb-6">
            We provide trusted, preventative care, online access and a better
            experience.
          </p>

          <ul className="grid sm:grid-cols-2 gap-3 mb-8">
            {medicalFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-dark">
                <span className="text-primary mt-0.5">✔</span>
                {feature}
              </li>
            ))}
          </ul>

          <Button variant="primary" icon={<span>→</span>}>
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Consultants;