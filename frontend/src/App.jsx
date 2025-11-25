import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Teams from "./assets/Team/ish.jpg"
import Teams1 from "./assets/Team/Cthia.jpg"
import Teams2 from "./assets/Team/Alifu.jpg"
import Teams3 from "./assets/Team/Kvin.jpg"
import Teams4 from "./assets/Team/anguw-removebg-preview.png"
import Teams5 from "./assets/Team/tumain.jpg"
import Teams6 from "./assets/Team/Trinpng.png"
import Teams7 from "./assets/Team/Drick.jpg"
import Team8 from"./assets/Team/Dv.jpg"
// projct 
import project1 from "./assets/Project/ishconnectsummit.png"
import project2 from "./assets/Project/SRAILA.png"
import project3 from "./assets/Project/Screenshot_15-10-2025_154158_localhost.jpeg"
import project4 from "./assets/Project/chat.png"
import project5 from "./assets/Project/Foodi.webp"
import project6 from "./assets/Project/Screenshot_15-10-2025_154350_ikibina-rw.vercel.app.jpeg"
import project7 from "./assets/Project/Kwihangira.png"

// Import new icons for project links
import { Menu, X, ArrowRight, User, Mail, MessageSquare, Briefcase, Rocket, Users, Target, Phone, MapPin, Linkedin, Twitter, Github, ChevronUp, Layers, TrendingUp, Zap, ExternalLink, Layers2Icon, InstagramIcon, FactoryIcon, SquareDashedBottom, StarHalfIcon, NetworkIcon } from 'lucide-react';

// --- Configuration Data ---

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Journey', href: '#journey' },
  { name: 'Projects', href: '#projects' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
];

const SERVICES_DATA = [
  { icon: Zap, title: 'Digital Learning', description: '. Interactive curricula, questionbanks, timed assessments,analytics dashboards. Role-based access for students/teachers; content pipelines (video/notes)' },
  { icon: Rocket, title: 'Full-Stack Development', description: 'Building scalable, high-performance web and mobile applications.' },
  { icon: Target, title: 'Product Design (UX/UI)', description: 'Creating intuitive, engaging, and human-centered user experiences.' },
  { icon: Layers2Icon, title: 'DevOps & Cloud Solutions', description: 'Automating deployment and managing infrastructure on major cloud platforms.' },


  

];

const TEAM_MEMBERS = [
  { name: 'Ishimwe J. Claude', position: 'CEO & Founder', photo: Teams, linkedin: 'https://www.linkedin.com/in/ish-claude/', twitter: 'https://x.com/ishlicky25' ,Github:"https://github.com/ishl250"},
  { name: 'Ishimwe Kevin', position: 'Full Stack Developer', photo: Teams3, linkedin: '#', twitter: '#',Github:"#" },
  { name: 'Iradukunda U. Cynthia', position: 'Content Manager', photo:Teams1, linkedin: '#', twitter: '#',Github:"#" },
  { name: 'Ndatabaye Tumaine', position: 'Web Developer', photo: Teams5, linkedin: '#', twitter: '#',Github:"#" },
    { name: 'Uwitonze P. Trinita', position: 'Graphic Designer', photo:Teams6, linkedin: '#', twitter: '#',Github:"#" },
  { name: 'Uwineza Ange', position: 'Customer Success Agent', photo: Teams4, linkedin: '#', twitter: '#', Github: "#" },
  { name: 'B.Divine', position: 'Support && Patnerships', photo: Team8, linkedin: '#', twitter: '#', Github: "#" },
    {name:'Derick',position:'MobileApp Deve',photo:Teams7,linkedin: '#', twitter: '#', Github: "#"}
  
];

const JOURNEY_MILESTONES = [
  { year: 2020, title: 'Inception', description: 'Founded Ish Connect; built early digital tools for schools and SMEs; established full-stack development, content, and payment expertise.' },
  { year: 2021, title: 'First Major Client', description: 'Secured first large-scale contract, validating our full-stack capabilities.' },
  { year: 2022, title: 'Product Launch', description: 'Launched Senior Three Science Lessons MVP; integrated Mobile Money; developed quizzes, timers, and real- time student-teacher solutions.' },
  { year: 2023, title: 'Global Expansion', description: 'Opened a new service center, extending our reach across two continents.' },
  { year: 2024, title: 'Innovation Award', description: 'Recognized for innovation in sustainable software development practices.' },
];

// --- UPDATED: 6 Projects with Links ---
const PROJECTS_DATA = [
    { 
      title: 'Smart Rwanda AI Learning', 
      desc: 'The tools designed to personalize learning and maximize student success across Rwanda.', 
      image: project2, 
      tags: ['Data', 'React', 'AWS'],
      links: [
        { icon: Github, href: 'https://github.com/ishl250/' },
        { icon: ExternalLink, href: 'https://srailaai.vercel.app/' },
          { icon:NetworkIcon, href: '#demo-nexus' },
      
      ]
    },
    { 
      title: 'Foodie Mobile App', 
      desc: 'Online Food Store application for making life easy. 100k+ active users in 6 months.', 
      image:project5, 
      tags: ['Mobile', 'Flutter', 'Dart','UX/UI'],
      links: [
        { icon: Github, href: 'https://github.com/ishl250/' },
        { icon: ExternalLink, href: '#demo-eco' },
        { icon:NetworkIcon, href: '#demo-nexus' },
      ]
    },
    { 
      title: 'Real Time Chat Application', 
      desc: 'High-performance, scalable API backend for modern storefronts. Handled 10k+ requests/sec.', 
      image:project4, 
      tags: ['Backend', 'Node.js', 'Scaling','React','Tailwindcss'],
      links: [
        { icon: Github, href: 'https://github.com/ishl250/' },
        { icon: ExternalLink, href: '#demo-ecommerce' },
        { icon:NetworkIcon, href: '#demo-nexus' },
      ]
    },
    { 
      title: 'Student Management System ', 
      desc: 'Building this helped me master React hooks, API integration, and user interface structuring.', 
      image: project3, 
      tags: ['React', 'Node.js', 'MongoDB','Tailwind CSS'],
      links: [
        { icon: Github, href: 'https://github.com/ishl250/FoodieApp' },
        { icon: ExternalLink, href: '#demo-ai' },
        { icon:NetworkIcon, href: '#demo-nexus' },
      ]
    },
    { 
      title: 'Ikibina-rw', 
      desc: 'Delivering highly secure financial and civic tech platforms focusing on fraud prevention and smart analytics.', 
      image: project6, 
      tags: ['React', 'Node.js', 'MongoDB','Tailwind CSS'],
      links: [
        { icon: Github, href: 'https://github.com/ishl250/' },
        { icon: ExternalLink, href: '#demo-phoenix' },
        { icon:NetworkIcon, href: '#demo-nexus' },
      ]
    },
    { 
      title: 'Kwihangira AI', 
      desc: 'AI for faterning innovation and  creativity, featuring a complex real-time dashboard.', 
      image: project7, 
      tags: ['React', 'Nodejs','Mongodb', 'Dashboard'],
      links: [
        { icon: Github, href: 'https://github.com/ishl250' },
        { icon: ExternalLink, href: '#demo-quantum' },
        { icon:NetworkIcon, href: '#demo-nexus' },
      ]
    },
];

// --- Framer Motion Animation Variants ---

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardHover = {
  initial: { scale: 1, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' },
  hover: { scale: 1.03, boxShadow: '0 20px 25px -5px rgba(28, 82, 223, 0.1), 0 10px 10px -5px rgba(28, 82, 223, 0.04)', transition: { duration: 0.3 } },
};

// --- Custom Hook for Scroll Reveal ---

const useScrollReveal = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return [ref, isInView];
};

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Updated dark mode navbar classes
  const navClass = isScrolled
    ? 'bg-brand-surface shadow-xl backdrop-blur-md bg-opacity-95 shadow-indigo-900/50'
    : 'bg-transparent shadow-none';
    
  const navVariants = {
    initial: { y: -100 },
    animate: { y: 0 },
  };

  return (
    <motion.nav
      initial="initial"
      animate="animate"
      variants={navVariants}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="flex-shrink-0"
          >
            <a href="#" className="text-2xl font-bold text-indigo-400">
              Ish<span className="text-teal-400">Connect</span>
            </a>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-full text-sm font-medium text-gray-200 hover:bg-indigo-900 hover:text-indigo-300 transition duration-150"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-brand-surface shadow-xl border-t border-indigo-900/50"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-indigo-900 hover:text-indigo-300 transition"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// Pure CSS/JS implementation for the Hero Nodes background
const NodeBackground = () => {
    useEffect(() => {
        const canvas = document.getElementById('node-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let particles = [];
        let mouse = { x: null, y: null, radius: 150 };

        const updateCanvasSize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        class Particle {
            constructor(x, y, directionX, directionY, size, color) {
                this.x = x; this.y = y; this.directionX = directionX; this.directionY = directionY; this.size = size; this.color = color;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color; ctx.fill();
            }
            update() {
                if (this.x > canvas.width || this.x < 0) { this.directionX = -this.directionX; }
                if (this.y > canvas.height || this.y < 0) { this.directionY = -this.directionY; }
                let dx = mouse.x - this.x; let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius + this.size) {
                    if (mouse.x < this.x && this.x < canvas.width - this.size * 10) { this.x += 10; }
                    if (mouse.x > this.x && this.x > this.size * 10) { this.x -= 10; }
                    if (mouse.y < this.y && this.y < canvas.height - this.size * 10) { this.y += 10; }
                    if (mouse.y > this.y && this.y > this.size * 10) { this.y -= 10; }
                }
                this.x += this.directionX; this.y += this.directionY; this.draw();
            }
        }

        const init = () => {
            particles = [];
            let numberOfParticles = (canvas.width * canvas.height) / 9000;
            if (window.innerWidth < 768) { numberOfParticles /= 2; }
            for (let i = 0; i < numberOfParticles; i++) {
                let size = Math.random() * 3 + 1;
                let x = Math.random() * (canvas.width - size * 2) + size;
                let y = Math.random() * (canvas.height - size * 2) + size;
                let directionX = (Math.random() * 0.4) - 0.2;
                let directionY = (Math.random() * 0.4) - 0.2;
                // Updated color to pop on dark mode
                let color = 'rgba(129, 140, 248, 0.4)'; // Indigo-400 with opacity
                particles.push(new Particle(x, y, directionX, directionY, size, color));
            }
        };

        const connect = () => {
            let opacityValue = 1;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let distance = Math.sqrt((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x) + (particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
                    if (distance < 120) {
                        opacityValue = 1 - (distance / 120);
                        // Updated line color
                        ctx.strokeStyle = `rgba(129, 140, 248, ${opacityValue})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) { particles[i].update(); }
            connect();
        };

        const handleMouseMove = (event) => { mouse.x = event.offsetX || event.clientX; mouse.y = event.offsetY || event.clientY; };
        const handleMouseOut = () => { mouse.x = undefined; mouse.y = undefined; };

        window.addEventListener('resize', () => { updateCanvasSize(); init(); });
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseout', handleMouseOut);

        updateCanvasSize(); init(); animate();

        return () => {
            window.removeEventListener('resize', () => { updateCanvasSize(); init(); });
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return <canvas id="node-canvas" className="absolute top-0 left-0 w-full h-full opacity-50"></canvas>;
};


const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-brand-dark flex items-center justify-center pt-16 overflow-hidden">
        <NodeBackground /> {/* Dynamic background component */}
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            variants={fadeIn}
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 drop-shadow-md"
          >
            Connect to the Future of <span className="text-indigo-400">Digital Innovation</span>
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            We architect and build transformative solutions that drive growth and redefine possibilities.
          </motion.p>
          <motion.a
            variants={fadeIn}
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-transparent text-base font-medium rounded-full shadow-lg text-white bg-teal-500 hover:bg-teal-600 transition duration-300 transform hover:scale-105"
            whileHover={{ y: -2, boxShadow: "0 10px 20px rgba(16, 185, 129, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  const [ref, isInView] = useScrollReveal();

  return (
    <section id="about" className="py-20 bg-brand-surface">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image/Visual */}
          <motion.div variants={fadeIn} className="order-2 md:order-1">
            <div className="rounded-xl shadow-2xl shadow-indigo-900/30 overflow-hidden aspect-video bg-indigo-900">
              <img
                src={project1}
                alt="IshConnect Core Team"
                className="w-full h-full object-cover transition duration-500 hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/667EEA/010128?text=IshConnect+Focus" }}
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="order-1 md:order-2">
            <motion.h2 variants={fadeIn} className="text-base text-teal-400 font-semibold tracking-wide uppercase">
              Who We Are
            </motion.h2>
            <motion.h3 variants={fadeIn} className="mt-2 text-3xl md:text-4xl font-extrabold text-white">
           Specializing in Human-Centered Digital Solutions.
            </motion.h3>
            <motion.p variants={fadeIn} className="mt-4 text-lg text-gray-300">
Ish Connect is a Rwanda-born software development studio specializing in building reliable, scalable, and human-centered digital solutions. As a developer, we combine modern technologies with agile methods to deliver products that are not only functional but also secure and user-friendly.
            </motion.p>
            <motion.p variants={fadeIn} className="mt-4 text-gray-400">
              From startups to enterprises, we help clients navigate complexity and build products that resonate deeply with their users.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const [ref, isInView] = useScrollReveal();

  return (
    <section id="services" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeIn} className="text-base text-teal-400 font-semibold tracking-wide uppercase">
            Our Expertise
          </motion.h2>
          <motion.h3 variants={fadeIn} className="mt-2 text-3xl md:text-4xl font-extrabold text-white mb-12">
            Services Designed for Tomorrow
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES_DATA.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="initial"
                whileHover="hover"
                className="p-8 bg-brand-surface rounded-xl shadow-lg border border-indigo-900/50 flex flex-col items-center text-center group"
              >
                <motion.div
                  className="p-4 rounded-full bg-indigo-900 text-indigo-300 mb-4 transition duration-300 group-hover:bg-teal-500 group-hover:text-white"
                  variants={cardHover}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <service.icon className="w-8 h-8" />
                </motion.div>
                <h4 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-indigo-300 transition duration-300">{service.title}</h4>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Journey = () => {
  const [ref, isInView] = useScrollReveal();

  return (
    <section id="journey" className="py-20 bg-brand-surface">
      <div className="container mx-auto px-6 text-center ">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeIn} className="text-base text-teal-400 font-semibold tracking-wide uppercase">
            Our Story
          </motion.h2>
          <motion.h3 variants={fadeIn} className="mt-2 text-3xl md:text-4xl font-extrabold text-white mb-12">
            Milestones on the Path to Excellence
          </motion.h3>

          {/* Timeline Container */}
          <div className="relative max-w-3xl mx-auto mt-12 ">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-indigo-800 hidden md:block ml-5 " />

            {JOURNEY_MILESTONES.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className={`flex mb-8 items-center w-full ${isLeft ? 'justify-start ml-10  md:pr-12  ' : 'justify-end  md:pl-12'}`}
                >
                  <div className={`hidden md:block w-1/2 ${isLeft ? 'order-1' : 'order-2'}`} />

                  {/* Marker */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.2 + 0.5, type: 'spring', stiffness: 150 }}
                    className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500 shadow-lg ring-8 ring-brand-surface md:absolute md:left-1/2 md:transform md:-translate-x-1/2"
                  >
                    <span className="text-sm font-bold text-white">{item.year.toString().slice(2)}</span>
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    variants={cardHover}
                    className={`w-full md:w-1/2 p-6 rounded-xl shadow-lg bg-brand-dark border border-indigo-900/50 text-left ${isLeft ? 'md:order-2' : 'md:order-1'} mr-8 sm:w-3` }
                  >
                    <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Projects = () => {
  const [ref, isInView] = useScrollReveal();

  return (
    <section id="projects" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeIn} className="text-base text-teal-400 font-semibold tracking-wide uppercase">
            Case Studies
          </motion.h2>
          <motion.h3 variants={fadeIn} className="mt-2 text-3xl md:text-4xl font-extrabold text-white mb-12">
            Highlighting Our Transformative Projects
          </motion.h3>

          {/* Updated Grid for 6 projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS_DATA.map((project, index) => (
              // Card is now a div, not an <a> tag
              <motion.div
                key={index} // Using index as key for the top-level item in the map
                variants={fadeIn}
                initial="initial"
                whileHover="hover"
                className="rounded-xl shadow-xl shadow-indigo-900/30 overflow-hidden group"
              >
                <motion.div variants={cardHover}>
                  {/* Image */}
                  <div className="aspect-video bg-brand-surface border-b border-indigo-900/50">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                      onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/5B21B6/ffffff?text=Project' }}
                    />
                  </div>
                  {/* Content */}
                  <div className="p-4 bg-brand-surface text-left">
                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-300 transition duration-300">{project.title}</h4>
                    <p className="text-gray-300 text-sm mb-3">{project.desc}</p>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-xs font-medium px-2 py-0.5 rounded-full bg-teal-900 text-teal-200">
                                {tag}
                            </span>
                        ))}
                    </div>
                    {/* --- NEW Links Section --- */}
                    <div className="flex items-center space-x-4 mt-4">
                        {project.links.map((link, linkIndex) => (
                            // FIX: Using linkIndex as key, instead of link.href (which may contain duplicates like '#')
                            <a 
                              key={linkIndex} 
                              href={link.href} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-gray-400 hover:text-teal-400 transition"
                              aria-label={`Link to ${project.title}`}
                            >
                                <link.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Team = () => {
  const [ref, isInView] = useScrollReveal();

  return (
    <section id="team" className="py-20 bg-brand-surface">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeIn} className="text-base text-teal-400 font-semibold tracking-wide uppercase">
            The People
          </motion.h2>
          <motion.h3 variants={fadeIn} className="mt-2 text-3xl md:text-4xl font-extrabold text-white mb-12">
            Meet Our Exceptional Team
          </motion.h3>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="initial"
                whileHover="hover"
                className="p-6 bg-brand-dark rounded-xl shadow-md border border-indigo-900/50 flex flex-col items-center text-center"
              >
                <motion.div
                  className="w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-indigo-500"
                  variants={cardHover}
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/667EEA/ffffff?text=User' }}
                  />
                </motion.div>
                <h4 className="text-lg font-bold text-white">{member.name}</h4>
                <p className="text-sm text-indigo-400 mb-3">{member.position}</p>
                <div className="flex space-x-3">
                  <a href={member.linkedin} target="_blank" className="text-gray-500 hover:text-indigo-400 transition">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.twitter} target="_blank" className="text-gray-500 hover:text-indigo-400 transition">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const VisionCTA = () => {
  const [ref, isInView] = useScrollReveal();

  return (
    <section className="py-20 bg-indigo-800">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.h3 variants={fadeIn} className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Our Future Vision: AI & Composable Systems
          </motion.h3>
          <motion.p variants={fadeIn} className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
            We anticipate an evolving workplace driven by automation, composable systems, and ethical AI. <br />
            . To be a leading force in shaping Africa's digital future where every school and small business can thrive using modern, secure, and affordable technology.
           </motion.p>
          <motion.a
            variants={fadeIn}
            href="#journey"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-indigo-600 bg-white hover:bg-gray-100 transition duration-300 transform hover:scale-105"
            whileHover={{ y: -2, boxShadow: "0 10px 20px rgba(255, 255, 255, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            See Our Progress
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [ref, isInView] = useScrollReveal();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("Sending...");

  try {
    const res = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      setStatus("Message sent successfully! We'll be in touch.");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message. Please try again.");
    }
  } catch (error) {
    console.error(error);
    setStatus("Server error. Please try again later.");
  }


  };

  return (
    <section id="contact" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={staggerContainer}
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <div className="order-2 md:order-1">
            <motion.h2 variants={fadeIn} className="text-base text-teal-400 font-semibold tracking-wide uppercase">
              Get in Touch
            </motion.h2>
            <motion.h3 variants={fadeIn} className="mt-2 text-3xl md:text-4xl font-extrabold text-white mb-6">
              Let's Build Something Great Together
            </motion.h3>
            <div className="space-y-4 text-gray-300">
              <motion.p variants={fadeIn} className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-indigo-400 flex-shrink-0 mt-1" />
                <span>Email Us: <a href="mailto:ishconnect1@gmail.com" className="font-medium hover:text-indigo-400 transition">ishconnect1@gmail.com</a></span>
              </motion.p>
              <motion.p variants={fadeIn} className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-indigo-400 flex-shrink-0 mt-1" />
                <span>Call Us: <a href="tel:+1234567890" className="font-medium hover:text-indigo-400 transition">+ (250) 787-377-750</a></span>
              </motion.p>
              <motion.p variants={fadeIn} className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-indigo-400 flex-shrink-0 mt-1" />
                <span>Office: Kabuga,Kigali, Rwanda   🗺️ </span>
              </motion.p>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div variants={fadeIn} className="order-1 md:order-2 p-8 bg-brand-surface rounded-xl shadow-lg border border-indigo-900/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text" name="name" id="name" value={formData.name} onChange={handleChange}
                    placeholder="Your Name" required
                    className="w-full p-3 pl-10 border border-indigo-800 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition bg-brand-dark text-gray-100 placeholder-gray-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email" name="email" id="email" value={formData.email} onChange={handleChange}
                    placeholder="Your Email" required
                    className="w-full p-3 pl-10 border border-indigo-800 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition bg-brand-dark text-gray-100 placeholder-gray-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-500" />
                  <textarea
                    name="message" id="message" rows="4" value={formData.message} onChange={handleChange}
                    placeholder="Your Message / Project Scope" required
                    className="w-full p-3 pt-4 pl-10 border border-indigo-800 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition bg-brand-dark text-gray-100 placeholder-gray-500"
                  ></textarea>
                </div>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-4 border border-transparent rounded-lg shadow-md text-base font-medium text-white bg-teal-500 hover:bg-teal-600 transition"
              >
                Send Inquiry
              </motion.button>
              {status && <p className={`mt-4 text-sm font-medium ${status.includes('sent') ? 'text-green-400' : 'text-indigo-400'}`}>{status}</p>}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark border-t border-indigo-900/50 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Info */}
          <div>
            <h4 className="text-2xl font-bold text-indigo-400 mb-3">IshConnect</h4>
            <p className="text-gray-400 text-sm">Digital Architects. Future Builders.</p>
          </div>
          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-3">Quick Links</h5>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-teal-400 transition text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Resources */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-3">Resources</h5>
            <ul className="space-y-2">
              <li><a href="https://ishlicky.netlify.app/" className="text-gray-400 hover:text-teal-400 transition text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition text-sm">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition text-sm">Privacy Policy</a></li>
            </ul>
          </div>
          {/* Social */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-3">Connect</h5>
            <div className="flex space-x-4">
              <a href="https://x.com/ishlicky25" className="text-gray-400 hover:text-teal-400 transition">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/ish-claude/" className="text-gray-400 hover:text-teal-400 transition">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/ishl250" className="text-gray-400 hover:text-teal-400 transition">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-indigo-900/50 pt-8 mt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} IshConnect. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! I\'m IshBot. How can I assist you with your project today?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); };
  useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (input.trim() === '') return;
    const userMessage = { id: Date.now(), text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: `Thanks for asking about "${input.substring(0, 30)}${input.length > 30 ? '...' : ''}". I can connect you to our team. Please check the Contact section!`,
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 120, damping: 14 }}
            className="w-72 sm:w-80 h-96 bg-brand-surface rounded-xl shadow-2xl border border-indigo-900/50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-3 bg-indigo-700 text-white flex justify-between items-center shadow-md">
              <h4 className="font-semibold">IshBot Assistant</h4>
              <button onClick={() => setIsOpen(false)} className="text-indigo-200 hover:text-white transition">
                <X className="w-5 h-5" />
              </button>
            </div>
            {/* Messages */}
            <div className="flex-1 p-3 space-y-3 overflow-y-auto custom-scrollbar">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    className={`max-w-xs p-3 rounded-xl shadow-sm text-sm ${
                      msg.sender === 'user' ? 'bg-teal-500 text-white rounded-br-none' : 'bg-indigo-900 text-gray-100 rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </motion.div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            {/* Input */}
            <div className="p-3 border-t border-indigo-900/50">
              <div className="flex">
                <input
                  type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask a question..."
                  className="flex-1 p-2 border border-indigo-800 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm bg-brand-dark text-gray-100 placeholder-gray-500"
                />
                <button onClick={handleSend} className="px-4 py-2 bg-indigo-700 text-white rounded-r-lg hover:bg-indigo-600 transition">
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-4 w-14 h-14 rounded-full bg-indigo-500 text-white shadow-xl flex items-center justify-center focus:outline-none transition duration-200"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>
    </div>
  );
};

// --- Main Application Component ---

const App = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = useCallback(() => {
    if (!showScroll && window.scrollY > 400) { setShowScroll(true); } 
    else if (showScroll && window.scrollY <= 400) { setShowScroll(false); }
  }, [showScroll]);

  const scrollTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [checkScrollTop]);

  return (
    <div className="font-sans antialiased text-gray-100 bg-brand-dark">
      {/* Tailwind CSS Font Import (Inter) and Global Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        
        :root {
          /* Your requested dark blue color */
          --color-brand-dark: #010128; 
          /* A slightly lighter blue-gray for cards/surfaces */
          --color-brand-surface: #1a233b; 
        }

        body { 
          font-family: 'Inter', sans-serif; 
          scroll-behavior: smooth;
          background-color: var(--color-brand-dark);
          color: #E2E8F0; /* Default light text */
        }

        .bg-brand-dark { background-color: var(--color-brand-dark); }
        .bg-brand-surface { background-color: var(--color-brand-surface); }

        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #4A5568; border-radius: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background-color: var(--color-brand-surface); }
      `}</style>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Journey />
        <Projects />
        <Team />
        <VisionCTA />
        <Contact />
      </main>

      <Footer />
      <ChatBot />

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollTop}
        className={`fixed bottom-20 right-4 z-40 p-3 rounded-full bg-indigo-500 text-white shadow-lg transition duration-300 ${showScroll ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default App;