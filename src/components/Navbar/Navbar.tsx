import { useState } from "react";
import { navLinks } from "../../constants/navLinks";
import Button from "../ui/Button";
import medicareLogo from "../../assets/medicare-logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
        <img
          src={medicareLogo}
          alt="Medicare logo"
          width={36}
          height={36}
          className="w-9 h-9 object-contain"
        />
        <span className="text-lg font-bold text-dark">Medicare</span>
      </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-dark">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="text-sm font-medium text-dark hover:text-primary transition-colors"
          >
            Get in touch
          </a>

          <Button variant="dark" icon={<span>→</span>}>
            Book an Appointment
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-dark"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="text-2xl">
            {isOpen ? "✕" : "☰"}
          </span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-white border-t border-gray-100">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-dark font-medium hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}

          <Button variant="dark" className="w-full justify-center">
            Book an Appointment
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;