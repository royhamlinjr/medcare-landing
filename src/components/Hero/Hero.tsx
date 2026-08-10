import Button from "../ui/Button";
import { happyCustomerAvatars } from "../../constants/avatars";

const Hero = () => {
  return (
    <section id="home" className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {/* Left: Text content */}
        <div className="bg-gradient-to-br from-orange-100 via-pink-100 to-purple-200 rounded-3xl p-8 md:p-12 flex flex-col justify-center gap-6">
          <span className="inline-flex w-fit items-center gap-2 bg-white/70 text-primary text-sm font-medium px-4 py-1.5 rounded-full">
            <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-semibold">
              New
            </span>
            Get flat 20% off on first check-up
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark leading-tight">
            Get Premium medical care for your best health
          </h1>

          <p className="text-gray-text text-base md:text-lg max-w-md">
            Choose us to experience expert care, modern facilities and
            personalized treatment for a healthier, happier you.
          </p>

          <div>
            <Button variant="primary" icon={<span>→</span>}>
              Make an Appointment
            </Button>
          </div>

          <div className="flex items-center gap-3 mt-4">
            <div className="flex -space-x-3">
              {happyCustomerAvatars.map((avatar) => (
                <img
                  key={avatar.id}
                  src={avatar.imageUrl}
                  alt={avatar.alt}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-primary text-white text-xs font-semibold flex items-center justify-center">
                +2k
              </div>
            </div>
            <span className="text-sm font-medium text-dark">Happy Customers</span>
          </div>
        </div>

        {/* Right: Doctor image */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-100 to-purple-200 min-h-[420px]">
          <img
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&auto=format&fit=crop&q=60"
            alt="Doctor ready for consultation"
            className="w-full h-full object-cover"
          />

          {/* Calling card overlay */}
          <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-72 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/100?img=51"
              alt="Dr. James Smith"
              className="w-11 h-11 rounded-full object-cover"
            />
            <div className="flex-1">
              <p className="text-sm font-semibold text-dark">Calling</p>
              <p className="text-xs text-gray-text">Dr. James Smith</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                aria-label="Video call"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                🎥
              </button>
              <button
                aria-label="End call"
                className="w-9 h-9 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                📞
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;