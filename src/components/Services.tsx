import { motion } from "motion/react";
import { Monitor, PenTool, Globe, BarChart } from "lucide-react";

const services = [
  {
    title: "Web Design",
    description: "Bespoke digital interfaces that balance aesthetic elegance with intuitive user experience.",
    icon: Monitor,
  },
  {
    title: "Brand Identity",
    description: "Crafting cohesive visual languages that tell your brand's unique story across all platforms.",
    icon: PenTool,
  },
  {
    title: "Development",
    description: "High-performance, responsive websites built with the latest technologies for seamless interaction.",
    icon: Globe,
  },
  {
    title: "Digital Strategy",
    description: "Data-driven insights and strategic planning to elevate your brand's digital presence.",
    icon: BarChart,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <span className="text-xs uppercase tracking-[0.3em] text-olive font-semibold mb-4 md:mb-6 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6 md:mb-8">
              Elevating brands <br />
              <span className="italic-serif opacity-50">through design.</span>
            </h2>
            <div className="h-px w-20 md:w-24 bg-charcoal/20 mb-6 md:mb-8" />
            <p className="text-charcoal/60 leading-relaxed text-sm md:text-base">
              We provide a comprehensive suite of digital services tailored to 
              the needs of premium brands and visionary creators.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-beige-300 border border-beige-300 mt-12 lg:mt-0">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-beige-100 p-8 md:p-12 hover:bg-beige-50 transition-colors duration-500"
              >
                <service.icon className="w-6 h-6 md:w-8 md:h-8 mb-6 md:mb-8 text-olive/60" />
                <h3 className="text-xl md:text-2xl font-serif mb-4">{service.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
