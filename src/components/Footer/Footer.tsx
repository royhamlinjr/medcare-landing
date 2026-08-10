import { footerLinkColumns } from "../../constants/footerLinks";

const socialIcons = ["📘", "📷", "🐦", "💼"];

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Let&apos;s Connect with us
            </h2>
            <p className="text-sm text-white/60">
              Talk to an expert
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+1234567890"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact us 📞
            </a>

            <a
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact us 📖
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-10 mb-12">

          {/* Brand + newsletter */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold">
                M
              </div>

              <span className="font-bold text-lg">
                Medcare
              </span>
            </div>

            <p className="text-sm text-white/60 mb-3">
              Subscribe to our newsletter for update
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center bg-white/5 border border-white/10 rounded-full pl-4 pr-1 py-1"
            >
              <input
                type="email"
                placeholder="Enter your email address..."
                className="bg-transparent text-sm text-white placeholder:text-white/40 outline-none flex-1 min-w-0"
                aria-label="Email address"
              />

              <button
                type="submit"
                className="bg-gradient-to-r from-primary to-purple-400 hover:opacity-90 transition-opacity text-xs font-medium px-4 py-2 rounded-full whitespace-nowrap"
              >
                Send a Message
              </button>
            </form>
          </div>

          {/* Link columns */}
          {footerLinkColumns.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold mb-4 text-sm">
                {column.title}
              </h4>

              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10">

          <p className="text-xs text-white/40 text-center sm:text-left">
            © Medcare and it&apos;s diary, Accounting for a better future.
          </p>

          <div className="flex items-center gap-4">

            {/* App buttons */}
            <div className="flex items-center gap-3">
              <span className="bg-white text-dark text-xs font-semibold px-3 py-1.5 rounded-lg">
                🍎 App Store
              </span>

              <span className="bg-white text-dark text-xs font-semibold px-3 py-1.5 rounded-lg">
                ▶ Google Play
              </span>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialIcons.map((icon, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label="Social media link"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center text-sm"
                >
                  {icon}
                </button>
              ))}
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;