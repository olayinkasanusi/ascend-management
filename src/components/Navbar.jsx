import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavAnchor = (path, anchorId = null) => {
    setMobileMenuOpen(false);
    if (location.pathname !== path) {
      navigate(`${path}${anchorId ? `#${anchorId}` : ''}`);
    } else if (anchorId) {
      const el = document.getElementById(anchorId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isHome = location.pathname === '/';
  const isServices = location.pathname === '/services';
  const isApply = location.pathname === '/apply' || location.pathname === '/application';

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-surface/85 backdrop-blur-md border-b border-outline-variant/40 shadow-sm py-2' 
          : 'bg-surface/75 backdrop-blur-md border-b border-outline-variant/30 py-3.5'
      }`}
    >
      <div className="flex justify-between items-center w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Brand Logo / Monogram */}
        <Link 
          to="/"
          className="flex items-center gap-space-xs group text-left"
        >
          <motion.span
            whileHover={{ scale: 1.08, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            className="w-8 h-8 rounded-full bg-primary-container text-surface flex items-center justify-center font-editorial text-lg font-semibold shadow-sm transition-shadow"
          >
            A
          </motion.span>
          <span className="font-editorial text-xl font-semibold tracking-tight text-primary">
            Ascend Management
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-space-xl">
          <button
            onClick={() => handleNavAnchor('/', 'about')}
            className={`text-sm font-medium transition-colors relative py-1 cursor-pointer ${
              isHome
                ? 'text-primary font-semibold'
                : 'text-on-surface-variant hover:text-secondary'
            }`}
          >
            About
            {isHome && (
              <motion.span
                layoutId="navUnderline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </button>

          <Link
            to="/services"
            className={`text-sm font-medium transition-colors relative py-1 ${
              isServices
                ? 'text-primary font-semibold'
                : 'text-on-surface-variant hover:text-secondary'
            }`}
          >
            Services & Expertise
            {isServices && (
              <motion.span
                layoutId="navUnderline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </Link>

          <button
            onClick={() => handleNavAnchor('/', 'approach')}
            className="text-sm font-medium text-on-surface-variant hover:text-secondary transition-colors py-1 cursor-pointer"
          >
            Approach
          </button>

          <Link
            to="/apply"
            className={`text-sm font-medium transition-colors relative py-1 ${
              isApply
                ? 'text-primary font-semibold'
                : 'text-on-surface-variant hover:text-secondary'
            }`}
          >
            Intake Portal
            {isApply && (
              <motion.span
                layoutId="navUnderline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        </nav>

        {/* Trailing Action Buttons */}
        <div className="flex items-center gap-3">
          <motion.div
            animate={{
              boxShadow: [
                '0 2px 8px rgba(69, 40, 60, 0.2)',
                '0 4px 18px rgba(123, 83, 92, 0.45)',
                '0 2px 8px rgba(69, 40, 60, 0.2)'
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.96 }}
            className="rounded-[14px]"
          >
            <Link
              to="/apply"
              className="inline-flex items-center justify-center px-5 py-2 bg-primary-container text-surface text-xs md:text-sm font-semibold tracking-wide rounded-[14px]"
            >
              Apply Now
            </Link>
          </motion.div>

          {/* Mobile Menu Toggle Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-primary hover:bg-surface-container transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </motion.button>
        </div>
      </div>

      {/* Mobile Glass Dropdown Menu with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="overflow-hidden md:hidden glass-modal border-t border-b border-tertiary-fixed-dim/50 px-margin-mobile py-6 mt-2 space-y-4 shadow-xl"
          >
            <div className="flex flex-col space-y-3">
              {[
                { to: '/', label: 'Home & Ethos', active: isHome },
                { to: '/services', label: 'Services & Expertise', active: isServices },
                { onClick: () => handleNavAnchor('/', 'approach'), label: 'The Ascend Approach', isButton: true },
                { to: '/apply', label: 'Confidential Intake Portal', active: isApply }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {item.isButton ? (
                    <button
                      onClick={item.onClick}
                      className="w-full text-left text-base font-medium py-2 px-3 rounded-lg text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      to={item.to}
                      className={`block text-left text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                        item.active ? 'bg-secondary-fixed/30 text-primary font-semibold' : 'text-on-surface'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="pt-2 border-t border-outline-variant/30"
            >
              <Link
                to="/apply"
                className="block w-full py-3 bg-primary-container text-surface text-center font-semibold rounded-xl shadow-plum-glow active:scale-95 transition-transform"
              >
                Start Confidential Application
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
