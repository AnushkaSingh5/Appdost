import { motion } from 'motion/react';
import {
  Code,
  Smartphone,
  Palette,
  Cloud,
  Brain,
  Server,
  Globe,
  Layers,
  Lightbulb,
  TrendingUp,
  Github,
  ArrowRight,
  Play,
  Coffee,
  Rocket,
  CheckCircle,
  Users,
  BookOpen,
  Clock,
  Award,
  Shield,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface HomeProps {
  onNavigate: (page: string, projectId?: number) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Responsive and scalable web applications tailored to your business needs.',
      checkpoints: ['Responsive Design', 'E-commerce Solutions', 'Progressive Web Apps'],
    },
    {
      icon: Smartphone,
      title: 'Android App Development',
      description: 'Custom Android applications built with the latest technologies to bring your ideas to life.',
      checkpoints: ['Native & Hybrid Apps','Play Store Deployment','Maintenance & Support'],
    },
    {
      icon: Palette,
      title: 'UI/UX Development',
      description: 'Beautiful, intuitive interfaces that delight users and drive engagement.',
      checkpoints: ['User Research','Wireframing','Brand Identity'],
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.',
      checkpoints: ['AWS, Azure, GCP','Migration Services','Performance Tuning'],
    },
    {
      icon: Users,
      title: 'CRM Software',
      description: 'Comprehensive CRM solutions to manage customer relationships and boost productivity.',
      checkpoints: ['Custom Development','Integration Services','Training & Support'],
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your business with robust security solutions and best practices.',
      checkpoints: ['Security Audits','Penetration Testing','Compliance'],
    },
  ];

  const expertise = [
    { icon: Palette, title: 'UI/UX Design Excellence', description: 'Crafting intuitive, user-centric designs that guarantee exceptional user satisfaction and engagement. We believe great design is invisible—it just works.' },
    { icon: Code, title: 'Custom Software Development', description: 'Building robust, scalable enterprise solutions tailored to your unique business requirements. From concept to deployment, we deliver excellence at every stage.' },
    { icon: Globe, title: 'Web Application Development', description: 'Creating responsive, high-performance web applications using the latest frameworks and technologies. Your digital presence, perfected.' },
    { icon: Smartphone, title: 'Mobile App Development', description: 'Developing native and cross-platform mobile applications that users love. iOS, Android, or hybrid—we have got you covered.' },
    { icon: Layers, title: 'Full-Stack Development', description: 'End-to-end development expertise covering frontend elegance, backend power, database optimization, and cloud infrastructure.' },
    { icon: Lightbulb, title: 'Digital Transformation Consulting', description: 'Strategic guidance to help businesses navigate their digital journey, from legacy system modernization to cloud migration.' },
  ];

  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: 'Complete Lifecycle Expertise',
      description: 'From ideation to deployment and beyond',
    },
    {
      icon: CheckCircle,
      title: 'Cutting-Edge Technology Stack',
      description: 'We work with the latest tools and frameworks',
    },
    {
      icon: CheckCircle,
      title: 'Agile Development Process',
      description: 'Fast iterations, continuous feedback, rapid delivery',
    },
    {
      icon: CheckCircle,
      title: 'Quality-First Approach',
      description: 'Rigorous testing and code reviews ensure excellence',
    },
    {
      icon: CheckCircle,
      title: 'Scalable Solutions',
      description: 'Built to grow with your business',
    },
    {
      icon: CheckCircle,
      title: 'Client-Centric Focus',
      description: 'Your success is our success',
    },
  ];

  const culture = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Encouraging creative problem-solving and innovative thinking'
    },
    {
      icon: Users,
      title: 'Collaborative Environment',
      description: 'Cross-functional teamwork and open communication'
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'Regular training & workshops for skill development'
    },
    {
      icon: TrendingUp,
      title: 'Growth Mindset',
      description: 'Diverse projects & exposure to new technologies'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Flexible arrangements for optimal productivity'
    },
    {
      icon: Award,
      title: 'Recognition & Rewards',
      description: 'Celebrating achievements and team success'
    },
  ];

  const projects = [
    {
      id: 1,
      title: 'BEU Mate - Bihar Engineering',
      description: 'An AI-powered study companion for B.Tech students offering personalized learning, career guidance, and placement prepara...',
      image: 'https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxMzYxODQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React Native', 'Node.js', 'AI/ML'],
      website: 'https://beumate.app/',
      playStore: 'https://play.google.com/store/apps/details?id=com.priyesranjan.beumate',
    },
    {
      id: 2,
      title: 'Devskillquest',
      description: 'An interactive learning platform designed for aspiring developers to master coding skills through hands-on projects, cod...',
      image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjEzMTMxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Next.js','TyypeScript','PostgreSQL'],
      website: 'https://devskillquest.com/',
      playStore: null,
    },
    {
      id: 3,
      title: 'The Weddings Chapter',
      description: 'A premium wedding planning platform connecting couples with top vendors, venues, and services. Features vendor portfolio...',
      image: 'https://images.unsplash.com/photo-1658552963426-1083cf9c495e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc2MTQwOTcwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['PHP','Laravel','MySQL'],
      website: 'https://theweddingschapter.com/',
      playStore: null,
    },
  ];

  const openSourceProjects = [
    {
      title: 'DeepFake Detection',
      description: 'Advanced deep learning model for detecting manipulated media using computer vision and neural networks. Summer internship research project.',
      tags: ['AI/ML', 'Jupyter'],
      github: 'https://github.com/priyesranjan/DeepFake',
      icon: Brain
    },
    {
      title: 'NooBot Intelligent',
      description: 'Collection of automation tools and scripts for modern DevOps workflows and infrastructure management.',
      tags: ['DevOps', 'Docker'],
      github: 'https://github.com',
      icon: Server
    },
    {
      title: 'React UI System',
      description: 'Modern, accessible React components with built-in dark mode and animation support.',
      tags: ['React', 'TypeScript'],
      github: 'https://github.com',
      icon: Code
    }
  ];

  const technologies = [
    'React',
    'Vue',
    'Angular',
    'Node.js',
    'Python',
    'TypeScript',
    'Docker',
    'Kubernetes',
    'AWS',
    'Firebase',
    'GraphQL',
    'MongoDB',
  ];

  const blogPosts = [
    {
      title: 'The Future of Web Development in 2025',
      excerpt: 'Exploring emerging trends and technologies shaping the future of web development...',
      image: 'https://images.unsplash.com/photo-1565489032347-cd8c5eecf29c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwYmxvZyUyMGFydGljbGV8ZW58MXx8fHwxNzYxMzA4NzAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: 'Oct 20, 2025',
      readTime: '5 min read',
    },
    {
      title: 'Building Scalable Microservices',
      excerpt: 'Best practices for designing and implementing microservices architecture...',
      image: 'https://images.unsplash.com/photo-1628017974725-18928e8e8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwb2ZmaWNlfGVufDF8fHx8MTc2MTMxMTg1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: 'Oct 18, 2025',
      readTime: '8 min read',
    },
    {
      title: 'AI Integration in Modern Apps',
      excerpt: 'How to effectively integrate AI capabilities into your applications...',
      image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NjEzMjExOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: 'Oct 15, 2025',
      readTime: '6 min read',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">

  {/* Animated Background */}
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
      animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
    />
    <motion.div
      className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-cyan-500/20 via-purple-500/20 to-indigo-500/20 rounded-full blur-3xl"
      animate={{ x: [0, -100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
      transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
    />
  </div>

  {/* Floating Stats Boxes */}
<div className="absolute inset-0 z-10 pointer-events-none">
  {[
    { top: '10%', left: '15%', title: 'Web Development', number: '+10 Projects' },
    { top: '30%', left: '75%', title: 'Mobile Apps', number: '+4 Apps' },
    { top: '65%', left: '20%', title: 'Fast Delivery', number: 'on time' },
    { top: '75%', left: '80%', title: 'Complete IT Solution Provider', number: 'since 2025' },
  ].map((item, i) => (
    <motion.div
      key={i}
      className="absolute px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-purple-500/30 text-slate-700 dark:text-slate-300 shadow-lg text-center"
      style={{ top: item.top, left: item.left }}
      animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
      transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i }}
    >
      <div className="font-semibold text-sm">{item.title}</div>
      {item.number && <div className="text-xs mt-1">{item.number}</div>}
    </motion.div>
  ))}
</div>


  {/* Main Content */}
  <div className="container mx-auto px-4 relative z-20 text-center">
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <motion.h1
        className="mb-8 text-6xl sm:text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Transform Your Ideas Into Digital Reality
      </motion.h1>
      <motion.p
        className="mb-12 text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Your trusted partner for comprehensive IT solutions. From mobile apps to enterprise software, 
        we bring innovation and excellence to every project with our expert team of developers.
      </motion.p>
      <motion.div
        className="flex flex-wrap gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Button
          onClick={() => onNavigate('services')}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white border-0 shadow-lg"
        >
          Explore Our Services
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
        <Button
          onClick={() => onNavigate('contact')}
          variant="outline"
          className="border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950"
        >
          Get Free Consultation
        </Button>
      </motion.div>
    </motion.div>
  </div>
</section>


      {/* About Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          {/* About Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Your Trusted Partner for Complete Digital Transformation
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              AppDost is your trusted partner for complete digital transformation. 
              We are a dynamic, innovation-driven IT solutions provider specializing 
              in turning visionary ideas into powerful, market-ready products. 
              Our mission is to empower businesses with cutting-edge technology 
              solutions that drive growth, enhance user experiences, and create lasting 
              digital impact.
            </p>
          </motion.div>

          {/* What We Do */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              What We Do
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Our Core Expertise
            </p>
          </motion.div>

          {/* Core Expertise */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="p-6 h-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-lg border-slate-200 dark:border-slate-700 hover:border-purple-500/50 transition-all">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="mb-2">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-20">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              Why Choose AppDost?
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="p-6 h-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-lg border-slate-200 dark:border-slate-700 hover:border-purple-500/50 transition-all">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="mb-1">{item.title}</h4>
                        <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Work Culture */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Work Culture
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {culture.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="w-full px-6 py-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg border-slate-200 dark:border-slate-700 hover:border-purple-500/50 transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-base font-bold min-w-[180px]">{item.title}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 flex-1">{item.description}</p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 justify-center mt-12"
          >
            <Button
              onClick={() => onNavigate('careers')}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0"
            >
              Join Our Team
            </Button>
            <Button
              onClick={() => onNavigate('contact')}
              variant="outline"
              className="border-purple-500 text-purple-600 dark:text-purple-400"
            >
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              We deliver end-to-end IT solutions that drive business growth and digital transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="p-8 h-full bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg border-slate-200 dark:border-slate-700 hover:border-purple-500/50 transition-all hover:shadow-xl">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-3">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{service.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.checkpoints?.map((cp, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm"
                      >
                        <CheckCircle className="w-4 h-4" />
                        <span>{cp}</span>
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Our Featured Projects
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Real solutions for real businesses - explore our successful projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden h-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-purple-500/50 transition-all hover:shadow-xl">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-purple-600 dark:text-purple-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex gap-3">
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 dark:text-purple-400 hover:underline"
                      >
                        Visit Website →
                      </a>
                      {project.playStore && (
                        <a
                          href={project.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-green-600 dark:text-green-400 hover:underline"
                        >
                          <Play className="w-4 h-4" />
                          Play Store
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              onClick={() => onNavigate('portfolio')}
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0"
            >
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Open Source Projects */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Open Source Projects</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Contributing to the developer community through open-source tools and libraries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {openSourceProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 h-full flex flex-col items-center bg-white/50 dark:bg-slate-800/50 backdrop-blur-lg border-slate-200 dark:border-slate-700 hover:border-purple-500/50 transition-all">
                  <div className="flex flex-col items-center w-full">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="mb-2 text-center font-bold text-lg transition-colors duration-300 group-hover:text-purple-700 dark:group-hover:text-purple-400">{project.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 text-center transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-300">{project.description}</p>
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-sm transition-colors duration-300 group-hover:bg-purple-100 dark:group-hover:bg-purple-800/40 group-hover:text-purple-800 dark:group-hover:text-purple-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:underline mt-2 transition-colors duration-300 group-hover:text-purple-800 dark:group-hover:text-purple-200"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Technologies We Master */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Technologies We Master
            </h3>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-purple-500/30 text-slate-700 dark:text-slate-300"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              onClick={() => onNavigate('contact')}
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0 shadow-lg"
            >
              <Rocket className="mr-2 w-4 h-4" />
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Insights & Tech Articles
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Latest thoughts on technology, development, and industry trends
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden h-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-purple-500/50 transition-all hover:shadow-xl">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex gap-3 mb-3 text-slate-500 dark:text-slate-400">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="mb-3">{post.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">{post.excerpt}</p>
                    <Button
                      variant="ghost"
                      className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 p-0"
                    >
                      Read More →
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              onClick={() => onNavigate('blog')}
              variant="outline"
              className="border-purple-500 text-purple-600 dark:text-purple-400"
            >
              View All Articles
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
