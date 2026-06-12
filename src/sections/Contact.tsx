import React, { useState } from 'react';
import { SectionHeader } from '../components/UI/SectionHeader';
import { GlassCard } from '../components/UI/GlassCard';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../components/UI/BrandIcons';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API request send
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Fire confetti celebrating form success
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f2fe', '#6366f1', '#a855f7']
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success notification after 5s
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactDetails = [
    {
      label: 'Email',
      value: 'ksugandhar123@gmail.com',
      href: 'mailto:ksugandhar123@gmail.com',
      icon: Mail,
      color: 'text-neon-cyan',
      bgColor: 'bg-neon-cyan/10'
    },
    {
      label: 'Phone',
      value: '+91 93610 51919',
      href: 'tel:+919361051919',
      icon: Phone,
      color: 'text-neon-indigo',
      bgColor: 'bg-neon-indigo/10'
    },
    {
      label: 'Location',
      value: 'Chennai, India',
      icon: MapPin,
      color: 'text-neon-violet',
      bgColor: 'bg-neon-violet/10'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/sugandhark',
      icon: LinkedinIcon,
      color: 'hover:text-neon-cyan hover:border-neon-cyan/40'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Sugandharkannan',
      icon: GithubIcon,
      color: 'hover:text-neon-indigo hover:border-neon-indigo/40'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="Contact"
          title="Get In Touch"
          subtitle="Interested in building production systems or looking to recruit? Leave a message below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact info column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <GlassCard hoverEffect={false} className="flex flex-col gap-6 border-dark-border/80">
              <h3 className="text-2xl font-display font-bold text-white mb-2">Sugandhar K</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed mb-4">
                Available for full-time Applied Data Scientist & AI Engineering positions. Open to discussions on Computer Vision, Generative AI models, system pipelines, and optimization architectures.
              </p>

              {/* Cards details list */}
              <div className="space-y-4">
                {contactDetails.map((det, index) => {
                  const Icon = det.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 p-3.5 bg-dark-bg/40 rounded-xl border border-dark-border/40 hover:border-neon-indigo/35 transition-all duration-300">
                      <div className={`p-2.5 rounded-lg ${det.bgColor} ${det.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{det.label}</span>
                        {det.href ? (
                          <a href={det.href} className="text-slate-200 text-sm hover:text-neon-cyan transition-colors block font-medium">
                            {det.value}
                          </a>
                        ) : (
                          <span className="text-slate-200 text-sm block font-medium">{det.value}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social connect */}
              <div className="pt-4 border-t border-dark-border/40 mt-4">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-3">Connect Online</span>
                <div className="flex gap-3">
                  {socialLinks.map((soc, i) => {
                    const Icon = soc.icon;
                    return (
                      <a
                        key={i}
                        href={soc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 border border-dark-border/50 bg-dark-bg/60 rounded-xl text-slate-400 hover:bg-dark-surface transition-all duration-300 flex items-center gap-2 text-sm ${soc.color}`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{soc.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Form column */}
          <div className="lg:col-span-7">
            <GlassCard hoverEffect={false} className="border-dark-border/80 relative">
              
              {/* Success Overlay */}
              {isSuccess && (
                <div className="absolute inset-0 bg-dark-card/95 backdrop-blur-md z-30 flex flex-col items-center justify-center text-center p-6 transition-all duration-300">
                  <div className="p-4 bg-emerald-500/10 rounded-full text-emerald-400 mb-4 animate-bounce">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400 text-sm font-light max-w-sm">
                    Thank you for reaching out. Sugandhar will get back to you shortly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="text-xs font-mono uppercase text-slate-400 tracking-wider block mb-1.5 font-bold">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="glass-input"
                    />
                    {errors.name && <span className="text-xs font-mono text-rose-400 mt-1 block">{errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-xs font-mono uppercase text-slate-400 tracking-wider block mb-1.5 font-bold">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="glass-input"
                    />
                    {errors.email && <span className="text-xs font-mono text-rose-400 mt-1 block">{errors.email}</span>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="text-xs font-mono uppercase text-slate-400 tracking-wider block mb-1.5 font-bold">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="glass-input"
                  />
                  {errors.subject && <span className="text-xs font-mono text-rose-400 mt-1 block">{errors.subject}</span>}
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-mono uppercase text-slate-400 tracking-wider block mb-1.5 font-bold">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Hi Sugandhar, I'd love to chat about..."
                    className="glass-input resize-none"
                  />
                  {errors.message && <span className="text-xs font-mono text-rose-400 mt-1 block">{errors.message}</span>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send System Message</span>
                    </>
                  )}
                </button>
              </form>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
};
