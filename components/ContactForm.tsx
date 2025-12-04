import React, { useState } from 'react';
import { MapPin, Phone, Mail, Sparkles, Loader2, Send } from 'lucide-react';
import { analyzeProjectInquiry } from '../services/geminiService';
import { ProjectAnalysis } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

export const ContactForm: React.FC = () => {
  const [projectDesc, setProjectDesc] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<ProjectAnalysis | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleAIAnalyze = async () => {
    if (!projectDesc.trim() || projectDesc.length < 10) return;
    
    setIsAnalyzing(true);
    try {
      const result = await analyzeProjectInquiry(projectDesc);
      setAnalysis(result);
    } catch (error) {
      console.error("Analysis failed", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API submission
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-titan-charcoal relative">
      <div className="absolute right-0 top-0 h-full w-1/3 bg-titan-black hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-titan-gold text-sm font-bold uppercase tracking-widest mb-2">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
              Let's Build Your Vision.
            </h3>
            <p className="text-gray-400 mb-12 max-w-md">
              Ready to start your next project? Contact us for a consultation.
              Our team of experts is ready to assist you.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-titan-black p-4 border border-white/10 text-titan-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-1">Headquarters</h4>
                  <p className="text-gray-400 text-sm">100 Industrial Blvd, Suite 500<br/>New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-titan-black p-4 border border-white/10 text-titan-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-1">Phone</h4>
                  <p className="text-gray-400 text-sm">+1 (212) 555-0199<br/>Mon-Fri, 8am - 6pm EST</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-titan-black p-4 border border-white/10 text-titan-gold">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-1">Email</h4>
                  <p className="text-gray-400 text-sm">projects@titanconstruct.com<br/>careers@titanconstruct.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-titan-black p-8 md:p-10 border border-white/5 shadow-2xl relative">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-6">
                  <Send size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Request Sent</h3>
                <p className="text-gray-400">Our team will review your project and get back to you within 24 hours.</p>
                <button onClick={() => setFormStatus('idle')} className="mt-8 text-titan-gold underline text-sm">Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h4 className="text-xl font-display font-bold text-white mb-6">Project Inquiry</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs text-gray-500 uppercase font-bold tracking-wider">First Name</label>
                    <input required type="text" className="w-full bg-titan-charcoal border border-white/10 text-white p-3 focus:border-titan-gold focus:ring-0 outline-none transition-colors" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-gray-500 uppercase font-bold tracking-wider">Last Name</label>
                    <input required type="text" className="w-full bg-titan-charcoal border border-white/10 text-white p-3 focus:border-titan-gold focus:ring-0 outline-none transition-colors" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-gray-500 uppercase font-bold tracking-wider">Email Address</label>
                  <input required type="email" className="w-full bg-titan-charcoal border border-white/10 text-white p-3 focus:border-titan-gold focus:ring-0 outline-none transition-colors" placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs text-gray-500 uppercase font-bold tracking-wider">Project Description</label>
                    <span className="text-[10px] text-titan-gold flex items-center gap-1">
                      <Sparkles size={10} /> AI Assisted
                    </span>
                  </div>
                  <textarea
                    required
                    rows={4}
                    value={projectDesc}
                    onChange={(e) => setProjectDesc(e.target.value)}
                    className="w-full bg-titan-charcoal border border-white/10 text-white p-3 focus:border-titan-gold focus:ring-0 outline-none transition-colors"
                    placeholder="Describe your project (e.g., 'We need a 5000 sqft commercial renovation for a tech office in downtown...')"
                  ></textarea>
                  <button
                    type="button"
                    onClick={handleAIAnalyze}
                    disabled={isAnalyzing || projectDesc.length < 10}
                    className="text-xs flex items-center gap-2 text-titan-gold hover:text-white disabled:opacity-50 transition-colors mt-1"
                  >
                    {isAnalyzing ? <Loader2 size={12} className="animate-spin" /> : <Sparkles size={12} />}
                    {isAnalyzing ? 'Analyzing...' : 'Analyze Project Requirements'}
                  </button>
                </div>

                {/* AI Analysis Result */}
                <AnimatePresence>
                  {analysis && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-titan-charcoal/50 border border-titan-gold/30 p-4 rounded-sm"
                    >
                      <h5 className="text-titan-gold text-xs font-bold uppercase mb-3 flex items-center gap-2">
                        <Sparkles size={12} /> AI Assessment
                      </h5>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="block text-gray-500 text-xs">Recommended Service</span>
                          <span className="text-white font-medium">{analysis.recommendedService}</span>
                        </div>
                        <div>
                          <span className="block text-gray-500 text-xs">Complexity</span>
                          <span className={`font-medium ${
                            analysis.complexityEstimation === 'High' || analysis.complexityEstimation === 'Enterprise' ? 'text-red-400' : 'text-green-400'
                          }`}>
                            {analysis.complexityEstimation}
                          </span>
                        </div>
                        <div className="col-span-2">
                          <span className="block text-gray-500 text-xs">Est. Timeline</span>
                          <span className="text-white font-medium">{analysis.estimatedTimeline}</span>
                        </div>
                        <div className="col-span-2 border-t border-white/5 pt-2 mt-1">
                           <p className="text-gray-400 text-xs italic">"{analysis.summary}"</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-titan-gold text-titan-black py-4 font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {formStatus === 'submitting' ? <Loader2 className="animate-spin" /> : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
