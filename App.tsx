import React from 'react';
import { Navbar, Footer } from './components/Layout';
import {
  Hero,
  AboutSection,
  ServicesSection,
  ProjectsSection,
  WhyChooseUsSection,
  TestimonialsSection
} from './components/HomeSections';
import { ContactForm } from './components/ContactForm';

function App() {
  return (
    <div className="bg-titan-black min-h-screen text-white font-sans selection:bg-titan-gold selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;
