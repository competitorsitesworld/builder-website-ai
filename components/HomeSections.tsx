import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Hammer,
  Ruler,
  HardHat,
  Briefcase,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Trophy,
  Building2,
  PaintBucket
} from 'lucide-react';
import { ServiceItem, ProjectItem, TestimonialItem } from '../types';

// Data
const SERVICES: ServiceItem[] = [
  { id: '1', title: 'Construction', description: 'Ground-up commercial and residential construction utilizing state-of-the-art methods.', icon: 'Hammer' },
  { id: '2', title: 'Renovation', description: 'Transforming existing structures with modern upgrades and structural reinforcement.', icon: 'PaintBucket' },
  { id: '3', title: 'Architecture', description: 'Award-winning design services that merge functionality with stunning aesthetics.', icon: 'Ruler' },
  { id: '4', title: 'Interior', description: 'Premium interior finishing for luxury residential and high-end commercial spaces.', icon: 'Building2' },
  { id: '5', title: 'Management', description: 'End-to-end project oversight ensuring timeline adherence and budget control.', icon: 'Briefcase' },
  { id: '6', title: 'Consulting', description: 'Expert feasibility studies, cost estimation, and regulatory compliance advice.', icon: 'HardHat' },
];

const PROJECTS: ProjectItem[] = [
  { 
    id: '1', 
    title: 'The Onyx Tower', 
    category: 'Commercial', 
    imageUrl: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop', 
    location: 'New York, NY' 
  },
  { 
    id: '2', 
    title: 'Azure Residence', 
    category: 'Residential', 
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop', 
    location: 'Los Angeles, CA' 
  },
  { 
    id: '3', 
    title: 'Apex Logistics Hub', 
    category: 'Industrial', 
    imageUrl: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop', 
    location: 'Chicago, IL' 
  },
  { 
    id: '4', 
    title: 'Helix Bridge', 
    category: 'Infrastructure', 
    imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2072&auto=format&fit=crop', 
    location: 'Austin, TX' 
  },
];

const TESTIMONIALS: TestimonialItem[] = [
  { id: '1', name: 'Marcus Sterling', role: 'CEO', company: 'Sterling Properties', quote: 'Titan Construct delivered our headquarters three weeks ahead of schedule. The attention to detail is unmatched in the industry.' },
  { id: '2', name: 'Elena Vance', role: 'Lead Architect', company: 'Vance Design Group', quote: 'Their ability to execute complex architectural visions without compromising structural integrity is why we partner with Titan.' },
  { id: '3', name: 'David Chen', role: 'Director of Operations', company: 'LogiTech Solutions', quote: 'Professional, transparent, and rigorous on safety. The best contracting experience we’ve had in a decade.' },
];

// Components

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with Parallax feel */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
          alt="Construction Site"
          className="w-full h-full object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite] transition-transform duration-[20s]"
          style={{ animation: 'none' }} // In a real app we'd use a slow zoom effect
        />
        {/* Simulating slow zoom via inline style if simple CSS animation needed, but static high quality is fine */}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center md:text-left w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 border border-titan-gold/50 rounded-full text-titan-gold text-sm font-semibold tracking-widest uppercase mb-6 bg-black/30 backdrop-blur-sm">
            Premium Contracting Services
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-white leading-tight mb-6">
            BUILDING <span className="text-transparent bg-clip-text bg-gradient-to-r from-titan-gold to-yellow-200">STRENGTH</span>.<br />
            DELIVERING EXCELLENCE.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 font-light leading-relaxed">
            From luxury residential to large-scale commercial infrastructure, we build with precision, integrity, and an unyielding commitment to quality.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-titan-gold text-titan-black px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="border border-white/30 text-white px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-titan-black transition-all duration-300 backdrop-blur-sm"
            >
              View Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-titan-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-titan-gold text-sm font-bold uppercase tracking-widest mb-2">Who We Are</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Engineering the Skylines of Tomorrow.
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Founded on the principles of innovation and durability, TITAN CONSTRUCT has evolved into a global leader in construction and contracting. We don't just pour concrete; we sculpt environments that inspire and endure.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our multidisciplinary team of engineers, architects, and project managers work in unison to deliver projects that defy expectations. We leverage cutting-edge technology and sustainable practices to build smarter, faster, and stronger.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <span className="block text-4xl font-bold text-white mb-1">25+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Years Experience</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-white mb-1">500+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Projects Completed</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative"
          >
            <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-titan-gold/10 -z-10 rounded-tr-[100px]"></div>
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop" 
              alt="Architect reviewing plans" 
              className="w-full h-auto rounded-lg shadow-2xl border border-white/5 grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-8 -left-8 bg-titan-charcoal p-8 border-l-4 border-titan-gold shadow-xl hidden md:block">
              <p className="font-display font-bold text-white text-xl">"Precision is<br/>our promise."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const ServicesSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch(name) {
      case 'Hammer': return <Hammer className="w-8 h-8" />;
      case 'Ruler': return <Ruler className="w-8 h-8" />;
      case 'Building2': return <Building2 className="w-8 h-8" />;
      case 'Briefcase': return <Briefcase className="w-8 h-8" />;
      case 'HardHat': return <HardHat className="w-8 h-8" />;
      case 'PaintBucket': return <PaintBucket className="w-8 h-8" />;
      default: return <Hammer className="w-8 h-8" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-titan-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-titan-gold text-sm font-bold uppercase tracking-widest mb-2">Our Capabilities</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white"> comprehensive construction solutions</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-titan-black border border-white/5 p-8 hover:border-titan-gold transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                 {getIcon(service.icon)}
              </div>
              <div className="text-titan-gold mb-6 group-hover:scale-110 transition-transform origin-left">
                {getIcon(service.icon)}
              </div>
              <h4 className="text-xl font-bold text-white mb-3 font-display">{service.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#contact" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-white hover:text-titan-gold transition-colors">
                Learn More <ArrowRight className="w-3 h-3 ml-2" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-titan-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
              <h2 className="text-titan-gold text-sm font-bold uppercase tracking-widest mb-2">Featured Work</h2>
              <h3 className="text-3xl md:text-5xl font-display font-bold text-white">Our Masterpieces</h3>
           </div>
           <a href="#" className="hidden md:flex items-center gap-2 text-white hover:text-titan-gold transition-colors text-sm font-bold uppercase tracking-widest">
             View Full Portfolio <ArrowRight size={16} />
           </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
             <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-[400px] overflow-hidden cursor-pointer"
             >
               <img
                 src={project.imageUrl}
                 alt={project.title}
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
               <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                 <span className="text-titan-gold text-xs font-bold uppercase tracking-wider mb-2 block">{project.category}</span>
                 <h4 className="text-2xl font-display font-bold text-white mb-1">{project.title}</h4>
                 <p className="text-gray-400 text-sm">{project.location}</p>
               </div>
             </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-flex items-center gap-2 text-white hover:text-titan-gold transition-colors text-sm font-bold uppercase tracking-widest">
             View Full Portfolio <ArrowRight size={16} />
           </a>
        </div>
      </div>
    </section>
  );
};

export const WhyChooseUsSection: React.FC = () => {
  const benefits = [
    { title: 'Safety First', desc: 'Zero-accident culture with rigorous protocols.', icon: ShieldCheck },
    { title: 'Quality Assurance', desc: 'ISO certified processes ensuring premium output.', icon: Trophy },
    { title: 'On-Time Delivery', desc: 'Precision planning to meet every deadline.', icon: Clock },
    { title: 'Trusted Integrity', desc: 'Transparent billing and honest communication.', icon: CheckCircle2 },
  ];

  return (
    <section id="why-us" className="py-24 bg-titan-charcoal relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-titan-gold/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-titan-gold text-sm font-bold uppercase tracking-widest mb-2">The Titan Standard</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white">Why Industry Leaders Choose Us</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, i) => (
             <div key={i} className="bg-titan-black/50 p-8 border border-white/5 text-center group hover:bg-titan-black hover:border-titan-gold/50 transition-all duration-300">
               <div className="bg-titan-charcoal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-titan-gold transition-colors duration-300">
                 <item.icon className="text-white w-8 h-8 group-hover:text-black" />
               </div>
               <h4 className="text-lg font-bold text-white mb-3 font-display">{item.title}</h4>
               <p className="text-gray-400 text-sm">
                 {item.desc}
               </p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-titan-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-titan-gold text-sm font-bold uppercase tracking-widest mb-12 text-center">Client Words</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="bg-titan-charcoal p-8 rounded-sm relative">
              <div className="text-titan-gold text-4xl font-serif absolute top-4 left-4 opacity-30">"</div>
              <p className="text-gray-300 italic mb-6 relative z-10 pt-4">
                {item.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-600 rounded-full overflow-hidden">
                  <img src={`https://picsum.photos/seed/${item.id}/100`} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h5 className="text-white font-bold text-sm">{item.name}</h5>
                  <span className="text-gray-500 text-xs uppercase tracking-wide">{item.role}, {item.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};