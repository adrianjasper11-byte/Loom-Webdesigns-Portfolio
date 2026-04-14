import { motion } from "motion/react";
import { ArrowDownRight, Phone, MessageCircle, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 md:pt-32 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-olive font-semibold mb-4 md:mb-6 block">
              Digital Craftsmanship
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif leading-[1] md:leading-[0.9] tracking-tight mb-8">
              We weave <br />
              <span className="italic-serif text-beige-300">digital</span> <br />
              experiences.
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-md text-base md:text-xl text-charcoal/70 font-light leading-relaxed mb-10 md:mb-12"
          >
            Loom is a boutique web design agency dedicated to creating premium, 
            high-performance digital solutions for visionary brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 md:gap-8"
          >
            <a 
              href="#portfolio"
              className="inline-flex items-center space-x-3 md:space-x-4 group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-charcoal flex items-center justify-center group-hover:bg-charcoal group-hover:text-beige-100 transition-all duration-500">
                <ArrowDownRight size={20} className="md:w-6 md:h-6" />
              </div>
              <span className="text-xs md:text-sm uppercase tracking-widest font-medium">Portfolio</span>
            </a>

            <a 
              href="mailto:adrianjasper11@gmail.com?subject=Inquiry%20for%20Loom%20Webdesigns"
              className="inline-flex items-center space-x-3 md:space-x-4 group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-charcoal flex items-center justify-center group-hover:bg-charcoal group-hover:text-beige-100 transition-all duration-500">
                <Mail size={20} className="md:w-6 md:h-6" />
              </div>
              <span className="text-xs md:text-sm uppercase tracking-widest font-medium">Email</span>
            </a>

            <a 
              href="tel:9566291654"
              className="inline-flex items-center space-x-3 md:space-x-4 group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-charcoal flex items-center justify-center group-hover:bg-charcoal group-hover:text-beige-100 transition-all duration-500">
                <Phone size={20} className="md:w-6 md:h-6" />
              </div>
              <span className="text-xs md:text-sm uppercase tracking-widest font-medium">Call</span>
            </a>

            <a 
              href="https://wa.me/919566291654"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 md:space-x-4 group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-charcoal flex items-center justify-center group-hover:bg-charcoal group-hover:text-beige-100 transition-all duration-500">
                <MessageCircle size={20} className="md:w-6 md:h-6" />
              </div>
              <span className="text-xs md:text-sm uppercase tracking-widest font-medium">WhatsApp</span>
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-4 relative mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="aspect-[3/4] rounded-[60px] md:rounded-[100px] overflow-hidden border border-beige-300 shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
              alt="Studio"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <div className="absolute -bottom-12 -left-12 hidden xl:block">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 rounded-full border border-charcoal/10 flex items-center justify-center text-[8px] uppercase tracking-[0.2em] text-center p-4"
            >
              Est. 2024 • Premium Design • Digital Excellence •
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-beige-200/50 blur-[120px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-beige-300/30 blur-[100px] -z-10 rounded-full" />
    </section>
  );
}
