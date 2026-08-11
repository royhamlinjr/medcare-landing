import Button from "../ui/Button";

const Benefits = () => {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-14 md:py-20">
      {/* Section heading */}
      <div className="text-center mb-12">
        <span className="text-primary text-sm font-bold tracking-wide uppercase">
          Features
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-dark mt-3">
          Discover Our Benefits &amp; Features
        </h2>
      </div>

      {/* Row 1: Mobile App + Secure Messaging */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Mobile Health App card */}
        <div className="bg-bg-soft rounded-3xl p-8">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-xl mb-5">
            📱
          </div>
          <h3 className="text-xl font-bold text-dark mb-2">
            Mobile Health Apps: Tools for patients to track symptoms,
            medications
          </h3>
          <p className="text-gray-text text-sm mb-6">
            Track your health, schedule, medicines, and reminders,
            personalized dashboard and suggestions.
          </p>

          {/* Phone mockup */}
          <div className="bg-dark rounded-3xl p-3 max-w-[240px] mx-auto">
            <div className="bg-white rounded-2xl p-4">
              <p className="text-xs text-gray-text mb-1">Today, 10 September</p>
              <p className="font-bold text-dark mb-4">Hi, Maria</p>
              <div className="bg-primary text-white rounded-xl p-4">
                <p className="text-xs opacity-80 mb-1">Medication</p>
                <p className="font-semibold text-sm">2 Tablets left</p>
                <p className="text-xs opacity-80">Take one at 08:00 AM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Secure Messaging card */}
        <div className="bg-bg-soft rounded-3xl p-8">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-xl mb-5">
            🛡️
          </div>
          <h3 className="text-xl font-bold text-dark mb-2">
            Secure Messaging Systems: HIPAA-compliant platforms
          </h3>
          <p className="text-gray-text text-sm mb-6">
            HIPAA-compliant platforms that allow secure communication between
            patients and providers.
          </p>

          {/* Chat mockup */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
              <img
                src="https://i.pravatar.cc/60?img=13"
                alt="Dr. Thomas"
                className="w-8 h-8 rounded-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div>
                <p className="text-sm font-semibold text-dark">Dr. Thomas</p>
                <p className="text-xs text-green-500">Online</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-primary text-white text-xs rounded-xl rounded-br-none px-3 py-2 self-end max-w-[75%]">
                Hi Dr. Thomas!
              </div>
              <div className="bg-gray-100 text-dark text-xs rounded-xl rounded-bl-none px-3 py-2 self-start max-w-[75%]">
                Hi, how can I assist you today?
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Dashboard */}
      <div className="bg-bg-soft rounded-3xl p-8 mb-6 grid md:grid-cols-[auto_1fr] gap-8 items-center">
        <div>
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-xl mb-5">
            📊
          </div>
          <h3 className="text-xl font-bold text-dark mb-2 max-w-xs">
            Personal Health Dashboard &amp; Appointment Booking System
          </h3>
          <p className="text-gray-text text-sm max-w-xs">
            View analytics, track progress, and book appointments with your
            healthcare providers seamlessly.
          </p>
        </div>

        <div className="grid sm:grid-cols-[1fr_auto] gap-4">
          {/* Line chart card */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-semibold text-dark">Appointment Overview</p>
              <span className="text-xs text-gray-text border border-gray-200 rounded-full px-3 py-1 flex items-center gap-1">
                This Month <span className="text-[10px]">▾</span>
              </span>
            </div>

            <div className="relative">
              {/* Floating tooltip */}
              <div className="absolute left-[38%] top-2 bg-primary text-white text-[11px] font-medium rounded-lg px-3 py-1.5 whitespace-nowrap shadow-md z-10">
                45 Booked Appointments
              </div>

              <svg
                viewBox="0 0 320 140"
                className="w-full h-32"
                preserveAspectRatio="none"
              >
                <polyline
                  points="0,120 45,110 90,95 135,100 180,70 225,55 270,20 320,10"
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                  strokeLinecap="round"
                />
                <circle cx="135" cy="100" r="5" fill="var(--color-primary)" />
              </svg>

              <div className="flex justify-between text-[10px] text-gray-text mt-1">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </div>

          {/* Health score card */}
          <div className="bg-white rounded-2xl p-5 shadow-sm w-full sm:w-40 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://i.pravatar.cc/60?img=45"
                alt="Maria"
                width={32}
                height={32}
                loading="lazy"
                decoding="async"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="text-xs font-semibold text-dark">Maria</p>
                <p className="text-[10px] text-gray-text">Health Score</p>
              </div>
            </div>

            <p className="text-2xl font-extrabold text-dark leading-none mb-0.5">85</p>
            <p className="text-[10px] text-green-500 font-medium mb-4">Excellent</p>

            <div className="flex items-end gap-1 h-16 mt-auto">
              {[40, 60, 35, 70, 50, 80, 45].map((height, index) => (
                <div
                  key={index}
                  className="flex-1 bg-primary/20 hover:bg-primary/40 transition-colors rounded-t-sm"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="flex justify-between text-[8px] text-gray-text mt-1">
              <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Prescription + Global services + CTA */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-bg-soft rounded-3xl p-8">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-xl mb-5">
            🔔
          </div>
          <h3 className="font-bold text-dark mb-2">
            Online Prescription Services: Fast and easy ordering
          </h3>
        </div>

        <div className="bg-bg-soft rounded-3xl p-8">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-xl mb-5">
            🌐
          </div>
          <h3 className="font-bold text-dark mb-2">
            Online global services we provide from any country
          </h3>
        </div>

        <div className="bg-gradient-to-br from-primary-light to-purple-200 rounded-3xl p-8 flex flex-col justify-between">
          <h3 className="font-bold text-dark mb-6">
            Explore our more amazing services
          </h3>
          <Button variant="primary" icon={<span>→</span>}>
            Explore more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;