import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled ? "py-4 bg-beige-100/80 backdrop-blur-md border-b border-beige-300" : "py-8 bg-transparent"
    } px-6 md:px-12`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-3 md:space-x-4"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 bg-charcoal rounded-full flex items-center justify-center text-beige-100 shrink-0">
            <svg width="16" height="16" md:width="20" md:height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
              <path d="M8 4V20M16 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="text-xl md:text-2xl font-serif tracking-tight whitespace-nowrap">
            LOOM <span className="italic-serif opacity-60">Webdesigns</span>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-12 text-xs uppercase tracking-[0.2em] font-medium">
          {["Portfolio", "Services", "About", "Contact"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="hover:opacity-50 transition-opacity"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden relative z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-beige-100 z-40 flex flex-col items-center justify-center space-y-8 px-6"
          >
            {["Portfolio", "Services", "About", "Contact"].map((item, i) => (
              <motion.a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-serif hover:italic-serif transition-all"
              >
                {item}
              </motion.a>
            ))}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-12 flex flex-col items-center space-y-4 text-xs uppercase tracking-widest text-charcoal/40"
            >
              <p>adrianjasper11@gmail.com</p>
              <p>+91 9566291654</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
