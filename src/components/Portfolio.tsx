import { motion } from "motion/react";

const projects = [
  {
    title: "TecDoc Digital Services",
    category: "Digital Services",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    url: "https://graceful-semifreddo-49f96a.netlify.app/",
  },
  {
    title: "Pranic Healer in Chennai | Holistic Energy Healing & Yoga",
    category: "Holistic Healing & Yoga",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    url: "https://pranichealerbaskarnarayanan.netlify.app/",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 px-6 md:px-12 bg-beige-200/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-olive font-semibold mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-7xl font-serif leading-tight">
              Crafting identities <br />
              <span className="italic-serif opacity-50">that resonate.</span>
            </h2>
          </div>
          <p className="text-charcoal/60 max-w-xs text-sm leading-relaxed">
            A collection of digital experiences designed with precision, 
            purpose, and a touch of elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target={project.url.startsWith("http") ? "_blank" : undefined}
              rel={project.url.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group block cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="px-8 py-3 bg-beige-100 text-charcoal text-xs uppercase tracking-widest rounded-full">View Project</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif mb-1">{project.title}</h3>
                  <p className="text-xs uppercase tracking-widest text-charcoal/50">{project.category}</p>
                </div>
                <span className="text-xs font-serif italic opacity-30">0{i + 1}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
