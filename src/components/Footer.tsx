import { motion } from "motion/react";
import { Instagram, Twitter, Linkedin, ArrowUp, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("adrianjasper11@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-charcoal text-beige-100 py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 mb-16 md:mb-24">
          <div className="lg:col-span-6">
            <div className="flex items-center space-x-3 md:space-x-4 mb-8 md:mb-12">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-beige-100 rounded-full flex items-center justify-center text-charcoal">
                <svg width="20" height="20" md:width="24" md:height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
                  <path d="M8 4V20M16 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="text-2xl md:text-3xl font-serif tracking-tight">
                LOOM <span className="italic-serif opacity-60">Webdesigns</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-7xl font-serif mb-8 leading-tight">
              Let's weave <br />
              <span className="italic-serif opacity-50">something together.</span>
            </h2>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4 group">
                <a 
                  href="mailto:adrianjasper11@gmail.com?subject=Inquiry%20for%20Loom%20Webdesigns"
                  className="text-xl md:text-3xl font-mono font-light tracking-tight border-b border-beige-100/30 pb-2 hover:border-beige-100 transition-colors w-fit"
                >
                  adrianjasper11@gmail.com
                </a>
                <button 
                  onClick={copyEmail}
                  className="p-2 rounded-full border border-beige-100/10 hover:bg-beige-100 hover:text-charcoal transition-all md:opacity-0 md:group-hover:opacity-100"
                  title="Copy Email"
                >
                  {copied ? <Check size={14} className="md:w-4 md:h-4" /> : <Copy size={14} className="md:w-4 md:h-4" />}
                </button>
              </div>
              <a 
                href="tel:9566291654"
                className="text-xl md:text-3xl font-mono font-light tracking-tight border-b border-beige-100/30 pb-2 hover:border-beige-100 transition-colors w-fit"
              >
                +91 9566291654
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-8">
            <div>
              <h4 className="text-[10px] md:text-xs uppercase tracking-widest text-beige-100/40 mb-6 md:mb-8">Navigation</h4>
              <ul className="space-y-3 md:space-y-4 text-[10px] md:text-sm uppercase tracking-widest">
                <li><a href="#portfolio" className="hover:opacity-50 transition-opacity">Portfolio</a></li>
                <li><a href="#services" className="hover:opacity-50 transition-opacity">Services</a></li>
                <li><a href="#about" className="hover:opacity-50 transition-opacity">About</a></li>
                <li><a href="#contact" className="hover:opacity-50 transition-opacity">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] md:text-xs uppercase tracking-widest text-beige-100/40 mb-6 md:mb-8">Social</h4>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-olive transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
                <a href="#" className="hover:text-olive transition-colors" aria-label="Twitter"><Twitter size={20} /></a>
                <a href="#" className="hover:text-olive transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 md:pt-12 border-t border-beige-100/10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-center md:text-left">
          <div className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] opacity-40">
            © 2024 Loom Webdesigns. All rights reserved.
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center space-x-4 text-[8px] md:text-[10px] uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity"
          >
            <span>Back to top</span>
            <div className="w-8 h-8 rounded-full border border-beige-100/20 flex items-center justify-center group-hover:bg-beige-100 group-hover:text-charcoal transition-all">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
