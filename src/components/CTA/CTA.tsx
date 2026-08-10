import Button from "../ui/Button";

const CTA = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-10">
      <div className="relative bg-gradient-to-br from-primary to-purple-500 rounded-3xl overflow-hidden px-6 py-16 md:py-20 text-center">
        {/* Decorative blobs */}
        <div className="absolute -top-10 right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-10 left-10 w-32 h-32 rounded-full bg-white/10 blur-2xl" />

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