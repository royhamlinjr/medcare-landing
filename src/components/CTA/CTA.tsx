import Button from "../ui/Button";

// Generates a cluster of small "sphere" divs arranged in a rough circular packing pattern
const sphereCluster = [
  { top: "10%", left: "45%", size: 22 },
  { top: "18%", left: "58%", size: 26 },
  { top: "5%", left: "65%", size: 18 },
  { top: "28%", left: "48%", size: 20 },
  { top: "22%", left: "70%", size: 24 },
  { top: "35%", left: "62%", size: 16 },
  { top: "12%", left: "38%", size: 16 },
  { top: "30%", left: "35%", size: 14 },
  { top: "40%", left: "50%", size: 18 },
  { top: "8%", left: "52%", size: 14 },
];

const CTA = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-10">
      <div className="relative bg-gradient-to-br from-primary to-purple-500 rounded-3xl overflow-hidden px-6 py-16 md:py-20 text-center">
        {/* Sphere cluster - top right */}
        <div className="absolute top-0 right-0 w-72 h-40 pointer-events-none hidden sm:block">
          {sphereCluster.map((sphere, index) => (
            <div
              key={index}
              className="absolute rounded-full"
              style={{
                top: sphere.top,
                left: sphere.left,
                width: sphere.size,
                height: sphere.size,
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.85), rgba(255,255,255,0.15) 60%, rgba(255,255,255,0.05) 100%)",
              }}
            />
          ))}
        </div>

        {/* Sphere cluster - bottom left, smaller */}
        <div className="absolute bottom-0 left-0 w-40 h-24 pointer-events-none hidden sm:block">
          {sphereCluster.slice(0, 5).map((sphere, index) => (
            <div
              key={index}
              className="absolute rounded-full"
              style={{
                top: sphere.top,
                left: sphere.left,
                width: sphere.size * 0.7,
                height: sphere.size * 0.7,
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.7), rgba(255,255,255,0.1) 60%, rgba(255,255,255,0.03) 100%)",
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight mb-8">
            Bring your customer services the next level of excellence.
          </h2>
          <Button
            variant="primary"
            icon={<span>→</span>}
            className="bg-white text-primary hover:bg-gray-100 mx-auto"
          >
            Make a schedule
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;