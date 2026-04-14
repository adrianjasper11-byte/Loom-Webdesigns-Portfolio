/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function App() {
  const [copied, setCopied] = useState(false);
  const { scrollYProgress } = useScroll();

  const copyEmail = () => {
    navigator.clipboard.writeText("adrianjasper11@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-olive z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        <section id="about" className="py-20 md:py-32 px-6 md:px-12 bg-beige-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  <h2 className="text-3xl md:text-6xl font-serif leading-tight mb-6 md:mb-8">
                    We believe in the power of <span className="italic-serif">intentional</span> design.
                  </h2>
                  <p className="text-charcoal/70 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                    At Loom, we don't just build websites; we craft digital legacies. 
                    Our approach combines technical precision with artistic intuition 
                    to create experiences that are as functional as they are beautiful.
                  </p>
                  <p className="text-charcoal/70 text-base md:text-lg leading-relaxed">
                    Founded on the principles of minimalism and quality, we work 
                    with a select group of clients to ensure every project receives 
                    the meticulous attention it deserves.
                  </p>
                </motion.div>
              </div>
              <div className="lg:col-span-6 order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="relative aspect-square rounded-full overflow-hidden border border-beige-300 max-w-md mx-auto lg:max-w-none"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=1000" 
                    alt="Design Process"
                    className="w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <Portfolio />
        <Services />
        
        {/* Contact Section Placeholder / Call to Action */}
        <section id="contact" className="py-20 md:py-32 px-6 md:px-12 bg-beige-200/50 text-center">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-olive font-semibold mb-4 md:mb-6 block">Get in Touch</span>
              <h2 className="text-4xl md:text-7xl font-serif mb-10 md:mb-12">
                Ready to start your <br />
                <span className="italic-serif opacity-50">next chapter?</span>
              </h2>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6">
                <div className="flex items-center justify-center space-x-2">
                  <a 
                    href="mailto:adrianjasper11@gmail.com?subject=Starting%20a%20Project%20with%20Loom"
                    className="inline-block px-8 md:px-12 py-4 md:py-5 bg-charcoal text-beige-100 rounded-full text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold hover:bg-olive transition-colors duration-500"
                  >
                    Email Us
                  </a>
                  <button 
                    onClick={copyEmail}
                    className="p-3 md:p-4 rounded-full border border-charcoal/10 hover:bg-charcoal hover:text-beige-100 transition-all"
                    title="Copy Email"
                  >
                    {copied ? <Check size={16} className="md:w-[18px] md:h-[18px]" /> : <Copy size={16} className="md:w-[18px] md:h-[18px]" />}
                  </button>
                </div>
                <a 
                  href="tel:9566291654"
                  className="inline-block px-8 md:px-12 py-4 md:py-5 border border-charcoal text-charcoal rounded-full text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold hover:bg-charcoal hover:text-beige-100 transition-all duration-500"
                >
                  Call: 9566291654
                </a>
                <a 
                  href="https://wa.me/919566291654"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 md:px-12 py-4 md:py-5 bg-olive text-beige-100 rounded-full text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold hover:bg-charcoal transition-colors duration-500"
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

