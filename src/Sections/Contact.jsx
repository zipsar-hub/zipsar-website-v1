import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Replace these with your actual EmailJS credentials
      const serviceId = "service_1vysmum";
      const templateId = "template_u7qddrk";
      const publicKey = "PmVO1l6f4DJfTV9TC";

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email send failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="Contact"
      className="w-full min-h-screen bg-black py-16 px-6 md:px-12 font-button"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Get In <span className="text-[#a556fb]">Touch</span>
        </h2>
        <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
          Ready to transform your digital presence? Let's discuss your project
          and bring your vision to life.
        </p>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Attractive Content */}
          <div className="space-y-8">
            {/* Hero Image/Illustration */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl z-30">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Contact Us"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#4922e56b] to-[#a656fb6b]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Mail className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Let's Connect</h3>
                    <p className="text-blue-100">
                      We're here to help you succeed
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#4922e5] rounded-lg opacity-50 z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-[#a556fb] rounded-lg opacity-50 z-10"></div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8 rounded-xl border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Why Choose Zipsar?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">
                    24/7 Support & Consultation
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">
                    Cutting-edge Technology Solutions
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">
                    Proven Track Record of Success
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">
                    Transparent Communication
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 shadow-2xl">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-2">
                Send us a Message
              </h3>
              <p className="text-gray-400">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a556fb] focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a556fb] focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a556fb] focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a556fb] focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#a556fb] text-white font-semibold py-4 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="flex items-center space-x-2 text-green-400 bg-green-900/20 p-4 rounded-lg border border-green-500/20">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>
                    Message sent successfully! We'll get back to you soon.
                  </span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center space-x-2 text-red-400 bg-red-900/20 p-4 rounded-lg border border-red-500/20">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>
                    Failed to send message. Please try again or contact us
                    directly.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
