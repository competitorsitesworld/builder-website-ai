import React, { useState, useEffect } from 'react';
import { Menu, X, HardHat, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled || mobileMenuOpen ? 'bg-titan-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-titan-gold p-1.5 rounded-sm">
             <HardHat className="text-titan-black w-6 h-6" />
          </div>
          <span className="text-2xl font-display font-bold tracking-tighter text-white">
            TITAN<span className="text-titan-gold">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-titan-gold transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-titan-gold text-titan-black px-6 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-white transition-all duration-300"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-titan-black border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-titan-gold border-b border-white/5 pb-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-titan-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-titan-gold p-1.5 rounded-sm">
                 <HardHat className="text-titan-black w-5 h-5" />
              </div>
              <span className="text-2xl font-display font-bold tracking-tighter text-white">
                TITAN<span className="text-titan-gold">.</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Constructing the future with precision, integrity, and world-class engineering.
              From residential dreams to industrial realities.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-titan-gold transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-wider mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {['Commercial Construction', 'Residential Renovation', 'Project Management', 'Architecture Design', 'Consulting'].map((item) => (
                <li key={item}><a href="#" className="hover:text-titan-gold transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {['About Us', 'Our Team', 'Careers', 'News & Media', 'Contact Us'].map((item) => (
                <li key={item}><a href="#" className="hover:text-titan-gold transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-wider mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe for industry insights.</p>
            <div className="flex border-b border-gray-700 pb-2">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border-none outline-none text-white w-full placeholder-gray-600 focus:ring-0"
              />
              <button className="text-titan-gold hover:text-white transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Titan Construct Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-600">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
