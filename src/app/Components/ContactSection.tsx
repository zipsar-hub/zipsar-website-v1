import { useState, useEffect, ChangeEvent, FormEvent, useRef, JSX } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';

// Define types for form data
interface FormData {
  username: string;
  email: string;
  subject: string;
  message: string;
}

// Define types for form status
interface FormStatus {
  submitting: boolean;
  submitted: boolean;
  error: boolean;
  message: string;
}

// Define types for EmailJS template parameters
interface EmailJSParams {
  from_name: string;
  from_email: string;
  to_email: string;
  subject: string;
  message: string;
}

export default function ContactSection(): JSX.Element {
  // Form state
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<FormStatus>({
    submitting: false,
    submitted: false,
    error: false,
    message: ''
  });
  
  const [activeField, setActiveField] = useState<string | null>(null);

  // Create refs for scroll animations
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
//   const socialRef = useRef<HTMLDivElement>(null);

  // Check if elements are in view
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const formInView = useInView(formRef, { once: true, amount: 0.2 });
  const headingInView = useInView(headingRef, { once: true, amount: 0.8 });
//   const socialInView = useInView(socialRef, { once: true, amount: 0.8 });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("PmVO1l6f4DJfTV9TC"); // Replace with your EmailJS public key
  }, []);

  // Handle form input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setStatus({ ...status, submitting: true });
    
    // EmailJS parameters
    const templateParams: EmailJSParams = {
      from_name: formData.username,
      from_email: formData.email,
      to_email: "yogeshvenugopal875@gmail.com",
      subject: formData.subject,
      message: formData.message
    };
    
    // Using EmailJS with proper parameters
    emailjs.send(
      'service_3hh19vl',  // Replace with your EmailJS service ID
      'template_f2cg317', // Replace with your EmailJS template ID
      templateParams,
      'PmVO1l6f4DJfTV9TC'   // Replace with your EmailJS public key
    )
    .then(() => {
      setStatus({
        submitting: false,
        submitted: true,
        error: false,
        message: 'Message sent successfully!'
      });
      
      // Reset form after successful submit
      setFormData({
        username: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false, message: '' }));
      }, 5000);
    })
    .catch((error: unknown) => {
      console.error('Error sending email:', error);
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: 'Failed to send message. Please try again.'
      });
    });
  };

  // Container animations
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.3
//       }
//     }
//   };

//   // Item animations
//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12
//       }
//     }
//   };

  // Section entry animation
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        when: "beforeChildren" 
      }
    }
  };

  // Card entry animation
  const cardVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 50, 
        damping: 15,
        delay: 0.2 
      }
    }
  };

  // Heading animations with staggered elements
  const headingContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const headingItemVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  // Form field entry animation
  const formFieldsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const formFieldVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  // Floating label animations
  const labelVariants = {
    focus: { 
      y: -25, 
      scale: 0.85, 
      color: "#818cf8",
      transition: { type: "spring", stiffness: 300, damping: 20 }
    },
    blur: (hasValue: boolean) => ({ 
      y: hasValue ? -25 : 0, 
      scale: hasValue ? 0.85 : 1,
      color: hasValue ? "#9ca3af" : "#9ca3af",
      transition: { type: "spring", stiffness: 300, damping: 20 }
    })
  };

  // Button animations
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 0px 15px rgba(129, 140, 248, 0.6)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 },
    submitting: {
      scale: [1, 1.05, 1],
      rotate: [0, 5, -5, 0],
      transition: {
        repeat: Infinity,
        duration: 1.5
      }
    }
  };

  // Success message animation
  const successVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  // Social icons animation
//   const socialContainerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const socialItemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12
//       }
//     }
//   };

  // Gradient background effect
  const gradientVariants = {
    animate: {
      backgroundPosition: ["0% 0%", "100% 100%"],
      transition: {
        repeat: Infinity,
        repeatType: "mirror" as const,
        duration: 15
      }
    }
  };

  return (
    <motion.div id='contact'
      ref={sectionRef}
      className="min-h-screen w-full flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gray-900"
      variants={sectionVariants}
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
    >
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900/30 to-gray-900 opacity-50 z-0"
        variants={gradientVariants}
        animate="animate"
      />

      {/* Glass effect card */}
      <motion.div 
        className="w-full max-w-3xl bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-2xl shadow-indigo-500/10 p-8 md:p-12 z-10"
        variants={cardVariants}
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
      >
        <motion.div 
          ref={headingRef}
          className="w-full font-second"
          variants={headingContainerVariants}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="text-center mb-14"
            variants={headingItemVariants}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text font-headerBold text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300"
              variants={headingItemVariants}
            >
              Get in Touch
            </motion.h1>
            <motion.p
              className="text-gray-400 max-w-md mx-auto"
              variants={headingItemVariants}
            >
              {`Have a question or want to work together? 
              Send me a message and I'll get back to you soon.`}
            </motion.p>
          </motion.div>
          
          <motion.form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-8"
            variants={formFieldsVariants}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
          >
            {/* Username field */}
            <motion.div 
              variants={formFieldVariants}
              className="relative"
            >
              <motion.div 
                className="relative rounded-lg"
                whileHover={{ boxShadow: "0 0 10px rgba(99, 102, 241, 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="w-full p-4 pr-12 rounded-lg bg-gray-800/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-white z-10"
                  onFocus={() => setActiveField("username")}
                  onBlur={() => setActiveField(null)}
                  placeholder=" "
                />
                <motion.span 
                  className="absolute left-4 top-0 text-gray-400 pointer-events-none z-50"
                  initial="blur"
                  animate={activeField === "username" ? "focus" : "blur"}
                  variants={labelVariants}
                  custom={formData.username.length > 0}
                >
                  Your Name
                </motion.span>
                <motion.div 
                  className="absolute right-4 top-4 text-indigo-400"
                  variants={formFieldVariants}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Email field */}
            <motion.div 
              variants={formFieldVariants}
              className="relative"
            >
              <motion.div 
                className="relative rounded-lg"
                whileHover={{ boxShadow: "0 0 10px rgba(99, 102, 241, 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 pr-12 rounded-lg bg-gray-800/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-white z-10"
                  onFocus={() => setActiveField("email")}
                  onBlur={() => setActiveField(null)}
                  placeholder=" "
                />
                <motion.span 
                  className="absolute left-4 top-0 text-gray-400 pointer-events-none z-50"
                  initial="blur"
                  animate={activeField === "email" ? "focus" : "blur"}
                  variants={labelVariants}
                  custom={formData.email.length > 0}
                >
                  Email Address
                </motion.span>
                <motion.div 
                  className="absolute right-4 top-4 text-indigo-400"
                  variants={formFieldVariants}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Subject field */}
            <motion.div 
              variants={formFieldVariants}
              className="relative"
            >
              <motion.div 
                className="relative rounded-lg"
                whileHover={{ boxShadow: "0 0 10px rgba(99, 102, 241, 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-4 pr-12 rounded-lg bg-gray-800/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-white z-10"
                  onFocus={() => setActiveField("subject")}
                  onBlur={() => setActiveField(null)}
                  placeholder=" "
                />
                <motion.span 
                  className="absolute left-4 top-0 text-gray-400 pointer-events-none z-50"
                  initial="blur"
                  animate={activeField === "subject" ? "focus" : "blur"}
                  variants={labelVariants}
                  custom={formData.subject.length > 0}
                >
                  Subject
                </motion.span>
                <motion.div 
                  className="absolute right-4 top-4 text-indigo-400"
                  variants={formFieldVariants}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Message field */}
            <motion.div 
              variants={formFieldVariants}
              className="relative"
            >
              <motion.div 
                className="relative rounded-lg"
                whileHover={{ boxShadow: "0 0 10px rgba(99, 102, 241, 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-white z-10"
                  onFocus={() => setActiveField("message")}
                  onBlur={() => setActiveField(null)}
                  placeholder=" "
                />
                <motion.span 
                  className="absolute left-4 top-0 text-gray-400 pointer-events-none z-50"
                  initial="blur"
                  animate={activeField === "message" ? "focus" : "blur"}
                  variants={labelVariants}
                  custom={formData.message.length > 0}
                >
                  Your Message
                </motion.span>
              </motion.div>
            </motion.div>
            
            {/* Submit button */}
            <motion.div 
              variants={formFieldVariants}
              className="flex justify-center pt-6"
            >
              <motion.button
                type="submit"
                disabled={status.submitting}
                variants={buttonVariants}
                initial="initial"
                whileHover={!status.submitting ? "hover" : undefined}
                whileTap={!status.submitting ? "tap" : undefined}
                animate={status.submitting ? "submitting" : "initial"}
                className="px-10 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium transition-all duration-300 disabled:opacity-70 relative overflow-hidden group"
              >
                <motion.span className="relative z-10 flex items-center justify-center">
                  {status.submitting ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </div>
                  ) : "Send Message"}
                </motion.span>
                
                {/* Button shine effect */}
                <motion.span 
                  className="absolute top-0 left-0 w-full h-full bg-white/20 skew-x-30 -translate-x-full z-0"
                  animate={{
                    translateX: ["0%", "200%"],
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                />
              </motion.button>
            </motion.div>
          </motion.form>
          
          {/* Form status message */}
          <AnimatePresence>
            {status.message && (
              <motion.div
                variants={successVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`mt-8 p-4 rounded-lg text-center ${
                  status.error 
                    ? 'bg-red-900/30 text-red-300 border border-red-800' 
                    : 'bg-green-900/30 text-green-300 border border-green-800'
                }`}
              >
                <div className="flex items-center justify-center">
                  {status.error ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                  {status.message}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Social media links */}
          {/* <motion.div 
            ref={socialRef}
            className="mt-14 flex justify-center space-x-6"
            variants={socialContainerVariants}
            initial="hidden"
            animate={socialInView ? "visible" : "hidden"}
          >
            {/* Twitter *
            <motion.a
              href="https://twitter.com/your_twitter_handle" // Replace with your Twitter URL
              className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
              variants={socialItemVariants}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </motion.a>
            
            {/* GitHub *
            <motion.a
              href="https://github.com/your_github_username" // Replace with your GitHub URL
              className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
              variants={socialItemVariants}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </motion.a>
            
            {/* LinkedIn *
            <motion.a
              href="https://linkedin.com/in/your_linkedin_profile" // Replace with your LinkedIn URL
              className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
              variants={socialItemVariants}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </motion.a>
          </motion.div> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}