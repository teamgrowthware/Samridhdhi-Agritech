import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully!');
    }, 1500);
  };

  return (
    <div className=" bg-gradient-to-br from-slate-50 to-slate-100 pt-20 md:pt-8">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center animate-fade-in">
            <p className="text-sm text-blue-600 font-medium mb-2">HOW TO</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Contact Us</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't hesitate to contact us for any kind of information
            </p>
          </div>
        </div>
      </div>

      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 transform transition-all duration-300 hover:shadow-xl">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-4">
            {/* Phone Card */}
            <div className="bg-white rounded-xl shadow-md p-4 flex items-center gap-3 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Phones</h3>
                <div className="space-y-1">
                  <a href="tel:9111104896" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors duration-300">
                    9111 10 4896
                  </a>
                  <a href="tel:9981817616" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors duration-300">
                    9981 81 7616
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-xl shadow-md p-4 flex items-center gap-3 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Emails</h3>
                <div className="space-y-1">
                  <a href="mailto:contact@samriddhiagritech.com" className="block text-xs text-gray-700 hover:text-green-600 transition-colors duration-300 break-all">
                    contact@samriddhiagritech.com
                  </a>
                  <a href="mailto:samriddhiagritech@gmail.com" className="block text-xs text-gray-700 hover:text-green-600 transition-colors duration-300 break-all">
                    samriddhiagritech@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-xl shadow-md p-4 flex items-start gap-3 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Address</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  201, Vishal Tower, 2nd Floor,<br />
                  Navlakha Bus Stand,<br />
                  Indore (MP), India
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-md p-4">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Follow Us</h3>
              <div className="flex gap-2">
                {[
                  { icon: Facebook, color: 'hover:bg-blue-600' },
                  { icon: Twitter, color: 'hover:bg-sky-500' },
                  { icon: Instagram, color: 'hover:bg-pink-600' },
                  { icon: Linkedin, color: 'hover:bg-blue-700' }
                ].map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <button
                      key={idx}
                      className={`w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-white ${social.color} transform hover:scale-110 transition-all duration-300`}
                    >
                      <Icon className="w-4 h-4" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
            <div className="h-64 md:h-80 bg-gray-200 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.3351907470253!2d75.87634931495804!3d22.719568785095633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd4b9f2c7c37%3A0x5d5a5c5c5c5c5c5c!2sNavlakha%20Bus%20Stand!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}