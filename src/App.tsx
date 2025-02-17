import React, { useState, useEffect } from 'react';
import { 
  Server, 
  Shield, 
  Cloud, 
  Code2, 
  Users, 
  Smartphone,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const carouselItems = [
    {
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80",
      title: "Transforming Businesses Through Technology",
      description: "We deliver cutting-edge IT solutions that drive innovation and growth for businesses worldwide."
    },
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80",
      title: "Innovative Solutions for Digital Success",
      description: "Empowering your business with state-of-the-art technology solutions."
    },
    {
      image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=1920&q=80",
      title: "Building Tomorrow's Technology Today",
      description: "Stay ahead of the curve with our advanced IT services and solutions."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Carousel */}
      <header className="relative h-[80vh] md:h-screen">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
            <img
              src={item.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20">
              <nav className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
                <div className="flex items-center">
                  <Server className="w-6 h-6 md:w-8 md:h-8 mr-2 text-white" />
                  <span className="text-lg md:text-xl font-bold text-white">SkyWeb Ventures</span>
                </div>
                <div className="hidden md:flex space-x-8">
                  <a href="#services" className="text-white hover:text-blue-200">Services</a>
                  <a href="#how-we-work" className="text-white hover:text-blue-200">How We Work</a>
                  <a href="#testimonials" className="text-white hover:text-blue-200">Testimonials</a>
                  <a href="#about" className="text-white hover:text-blue-200">About</a>
                  <a href="#contact" className="text-white hover:text-blue-200">Contact</a>
                </div>
                <button 
                  className="md:hidden text-white"
                  onClick={toggleMenu}
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </nav>

              {/* Mobile Menu */}
              {isMenuOpen && (
                <div className="fixed inset-0 bg-black/90 z-50 md:hidden">
                  <div className="flex flex-col items-center justify-center h-full space-y-8">
                    <a href="#services" onClick={closeMenu} className="text-white text-xl hover:text-blue-200">Services</a>
                    <a href="#how-we-work" onClick={closeMenu} className="text-white text-xl hover:text-blue-200">How We Work</a>
                    <a href="#testimonials" onClick={closeMenu} className="text-white text-xl hover:text-blue-200">Testimonials</a>
                    <a href="#about" onClick={closeMenu} className="text-white text-xl hover:text-blue-200">About</a>
                    <a href="#contact" onClick={closeMenu} className="text-white text-xl hover:text-blue-200">Contact</a>
                  </div>
                </div>
              )}
              
              <div className="container mx-auto px-4 md:px-6 h-full flex items-center">
                <div className="max-w-3xl">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white">{item.title}</h1>
                  <p className="text-lg md:text-xl mb-6 md:mb-8 text-white">{item.description}</p>
                  <button className="bg-blue-600 text-white px-6 md:px-8 py-2 md:py-3 hover:bg-blue-700 transition duration-300 flex items-center text-sm md:text-base">
                    Get Started
                    <ChevronRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </header>

      {/* How We Work Section */}
      <section id="how-we-work" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-16">How We Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                number: "01",
                title: "Discovery",
                description: "We begin by understanding your business needs and objectives through in-depth consultation."
              },
              {
                number: "02",
                title: "Strategy",
                description: "Our team develops a comprehensive strategy tailored to your specific requirements."
              },
              {
                number: "03",
                title: "Implementation",
                description: "We execute the plan using cutting-edge technology and best practices."
              },
              {
                number: "04",
                title: "Support",
                description: "Ongoing maintenance and support to ensure your solution continues to deliver value."
              }
            ].map((step, index) => (
              <div key={index} className="bg-gray-50 p-6 md:p-8 transition-all duration-300 hover:shadow-xl">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-3 md:mb-4">{step.number}</div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">{step.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-16">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                icon: <Cloud className="w-10 h-10 md:w-12 md:h-12" />, 
                title: 'Cloud Solutions', 
                desc: 'Secure and scalable cloud infrastructure for your business needs',
                image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80'
              },
              { 
                icon: <Code2 className="w-10 h-10 md:w-12 md:h-12" />, 
                title: 'Custom Software', 
                desc: 'Tailored software solutions to streamline your operations',
                image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80'
              },
              { 
                icon: <Shield className="w-10 h-10 md:w-12 md:h-12" />, 
                title: 'Cybersecurity', 
                desc: 'Advanced security measures to protect your digital assets',
                image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80'
              },
              { 
                icon: <Users className="w-10 h-10 md:w-12 md:h-12" />, 
                title: 'IT Consulting', 
                desc: 'Expert guidance for your technology decisions',
                image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80'
              },
              { 
                icon: <Smartphone className="w-10 h-10 md:w-12 md:h-12" />, 
                title: 'Mobile Development', 
                desc: 'Native and cross-platform mobile applications',
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80'
              },
              { 
                icon: <Server className="w-10 h-10 md:w-12 md:h-12" />, 
                title: 'Infrastructure', 
                desc: 'Robust IT infrastructure design and management',
                image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="group bg-white shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6 md:p-8">
                  <div className="text-blue-600 mb-3 md:mb-4 transform transition-transform duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart Inc",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
                quote: "SkyWeb Ventures transformed our business operations with their innovative cloud solutions. Their expertise and dedication are unmatched."
              },
              {
                name: "Michael Chen",
                role: "CTO, Innovation Labs",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
                quote: "The cybersecurity solutions provided by TechCore have given us peace of mind. Their team's proactive approach has prevented numerous potential threats."
              },
              {
                name: "Emily Rodriguez",
                role: "Director, Global Systems",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
                quote: "Working with TechCore has been a game-changer for our company. Their custom software solutions have streamlined our processes significantly."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 md:p-8 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center mb-4 md:mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 md:w-16 md:h-16 object-cover"
                  />
                  <div className="ml-3 md:ml-4">
                    <h3 className="text-base md:text-lg font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic text-sm md:text-base">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="w-full shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Who We Are</h2>
              <p className="text-gray-600 text-sm md:text-base mb-6">
                SkyWeb Ventures is a leading IT company with over a decade of experience in delivering innovative technology solutions. We combine expertise with cutting-edge technology to help businesses thrive in the digital age.
              </p>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-blue-600">200+</h4>
                  <p className="text-gray-600 text-sm md:text-base">Clients Worldwide</p>
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-blue-600">500+</h4>
                  <p className="text-gray-600 text-sm md:text-base">Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-16">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mr-3" />
                  <span className="text-sm md:text-base">contact@techcore.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mr-3" />
                  <span className="text-sm md:text-base">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mr-3" />
                  <span className="text-sm md:text-base">123 Tech Street, Silicon Valley, CA</span>
                </div>
              </div>
            </div>
            <form className="space-y-4 md:space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm md:text-base"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm md:text-base"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm md:text-base"
                ></textarea>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 md:py-3 hover:bg-blue-700 transition duration-300 text-sm md:text-base w-full md:w-auto">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Server className="w-6 h-6 md:w-8 md:h-8 mr-2" />
                <span className="text-lg md:text-xl font-bold">SkyWeb Ventures</span>
              </div>
              <p className="text-gray-400 text-sm md:text-base">Empowering businesses through innovative technology solutions.</p>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#services" className="block text-gray-400 hover:text-white text-sm md:text-base">Services</a>
                <a href="#how-we-work" className="block text-gray-400 hover:text-white text-sm md:text-base">How We Work</a>
                <a href="#testimonials" className="block text-gray-400 hover:text-white text-sm md:text-base">Testimonials</a>
                <a href="#about" className="block text-gray-400 hover:text-white text-sm md:text-base">About</a>
              </div>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <Github className="w-5 h-5 md:w-6 md:h-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <Twitter className="w-5 h-5 md:w-6 md:h-6" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm md:text-base">&copy; 2024 SkyWeb Ventures. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;