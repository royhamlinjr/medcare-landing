import { trustedCompanies } from "../../constants/companies";

const TrustedCompanies = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-14 md:py-20 text-center">
      <span className="text-primary text-sm font-bold tracking-wide uppercase">
        Trusted By
      </span>

      <h2 className="text-3xl md:text-5xl font-extrabold text-dark mt-3 mb-4 leading-tight">
        Trusted by 100+ Global top company
        <br className="hidden md:block" /> connect with us
      </h2>

      <p className="text-gray-text max-w-xl mx-auto mb-12">
        Brands everywhere use Medcare solutions to build awareness, engage
        better and grow their values.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {trustedCompanies.map((company) => (
          <div
            key={company.name}
            className="flex items-center justify-center gap-2 border border-gray-100 rounded-xl py-5 px-4 hover:shadow-soft hover:border-primary/30 transition-all duration-200"
          >
            <span className="text-xl">{company.logo}</span>
            <span className="font-semibold text-dark">{company.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedCompanies;