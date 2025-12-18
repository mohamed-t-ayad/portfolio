'use client';

import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Linkedin, User, Send } from 'lucide-react';
import { Section, SectionHeader } from '../ui/section';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  // };
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (res.ok) {
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  } else {
    alert('Something went wrong. Please try again.');
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@mohamedayad.com',
      href: 'mailto:contact@mohamedayad.com',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+20 109 286 9837',
      href: 'tel:+201092869837',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: 'Chat on WhatsApp',
      href: 'https://wa.me/201092869837',
      gradient: 'from-green-400 to-green-600',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/mohamed-ayad-294295130/',
      gradient: 'from-blue-600 to-blue-700',
    },
  ];

  return (
    <Section id="contact" gray>
      <SectionHeader tag="Let's Connect" title="Get In Touch" />

      <div className="max-w-5xl mx-auto space-y-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${method.gradient} rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-blue-600 font-medium text-sm">
                  {method.value}
                </p>
              </a>
            );
          })}
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-xl">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="flex items-center gap-2 font-semibold text-gray-900 mb-3">
                <User className="w-4 h-4" />
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-50 transition-all duration-300"
              />
            </div>

            <div>
              <label htmlFor="email" className="flex items-center gap-2 font-semibold text-gray-900 mb-3">
                <Mail className="w-4 h-4" />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-50 transition-all duration-300"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="flex items-center gap-2 font-semibold text-gray-900 mb-3">
              <Phone className="w-4 h-4" />
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-50 transition-all duration-300"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="flex items-center gap-2 font-semibold text-gray-900 mb-3">
              <MessageCircle className="w-4 h-4" />
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              required
              rows={6}
              className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-50 transition-all duration-300 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>
        </form>
      </div>
    </Section>
  );
};
