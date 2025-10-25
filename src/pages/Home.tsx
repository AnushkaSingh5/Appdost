import { motion } from 'motion/react';
import {
  Code,
  Smartphone,
  Palette,
  Cloud,
  Brain,
  Server,
  Zap,
  Users,
  Award,
  Target,
  Heart,
  Shield,
  Rocket,
  Coffee,
  Lightbulb,
  TrendingUp,
  Github,
  ArrowRight,
  Play,
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
      description: 'Custom web applications built with modern frameworks and best practices.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile solutions for iOS and Android.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that delight users and drive engagement.',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.',
    },
    {
      icon: Brain,
      title: 'AI & ML',
      description: 'Intelligent solutions powered by machine learning and artificial intelligence.',
    },
    {
      icon: Server,
      title: 'DevOps',
      description: 'Streamlined deployment pipelines and infrastructure automation.',
    },
  ];

  const expertise = [
    { icon: Zap, title: 'Lightning Fast', description: 'Optimized performance and speed' },
    { icon: Shield, title: 'Secure & Reliable', description: 'Enterprise-grade security' },
    { icon: Users, title: 'User-Centric', description: 'Designed with users in mind' },
    { icon: Award, title: 'Award Winning', description: 'Recognized excellence' },
    { icon: Target, title: 'Goal Oriented', description: 'Focused on your success' },
    { icon: Heart, title: 'Passionate Team', description: 'We love what we do' },
  ];

  const whyChooseUs = [
    'Industry-leading expertise',
    'Proven track record',
    'Agile methodology',
    'Dedicated support',
    'Competitive pricing',
    'Innovation-driven',
  ];

  const culture = [
    'Remote-first workplace',
    'Continuous learning',
    'Work-life balance',
    'Inclusive environment',
    'Creative freedom',
    'Team collaboration',
  ];

  const values = [
    'Innovation',
    'Integrity',
    'Excellence',
    'Customer focus',
    'Teamwork',
    'Accountability',
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with AI-powered recommendations',
      image: 'https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxMzYxODQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'Node.js', 'AI'],
      website: 'https://example.com',
      playStore: null,
    },
    {
      id: 2,
      title: 'Health & Fitness App',
      description: 'Mobile fitness tracking with personalized workout plans',
      image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjEzMTMxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React Native', 'Firebase'],
      website: 'https://example.com',
      playStore: 'https://play.google.com/store',
    },
    {
      id: 3,
      title: 'SaaS Dashboard',
      description: 'Analytics dashboard for business intelligence',
      image: 'https://images.unsplash.com/photo-1658552963426-1083cf9c495e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc2MTQwOTcwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Vue.js', 'Python', 'ML'],
      website: 'https://example.com',
      playStore: null,
    },
  ];

  const openSourceProjects = [
    {
      name: 'GradientUI',
      description: 'Modern React component library with gradient themes',
      stars: 1200,
      github: 'https://github.com',
    },
    {
      name: 'CloudSync',
      description: 'Lightweight cloud storage synchronization tool',
      stars: 850,
      github: 'https://github.com',
    },
    {
      name: 'DataViz',
      description: 'Interactive data visualization library',
      stars: 2300,
      github: 'https://github.com',
    },
    {
      name: 'DevToolkit',
      description: 'Collection of developer productivity tools',
      stars: 640,
      github: 'https://github.com',
    },
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <motion.div
            className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-cyan-500/20 via-purple-500/20 to-indigo-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              className="mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Building Digital Excellence
            </motion.h1>
            <motion.p
              className="mb-8 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              We craft innovative web and mobile solutions that transform businesses and
              delight users. From concept to deployment, we bring your vision to life with
              cutting-edge technology.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center"
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
              We're a full-service digital agency specializing in web development, mobile apps,
              and cloud solutions. Our team of experts delivers exceptional results that drive
              business growth.
            </p>
          </motion.div>

          {/* Core Expertise */}
          <div className="mb-20">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            >
              Core Expertise
            </motion.h3>
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
              Why Choose Us
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                  <span className="text-slate-700 dark:text-slate-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Work Culture & Values */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Work Culture
              </h3>
              <div className="space-y-3">
                {culture.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800"
                  >
                    <Coffee className="w-5 h-5 text-purple-500" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Our Values
              </h3>
              <div className="space-y-3">
                {values.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800"
                  >
                    <Lightbulb className="w-5 h-5 text-pink-500" />
                    <span>{item}</span>
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
              Comprehensive digital solutions tailored to your business needs
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
              Featured Projects
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Showcasing our best work and successful client collaborations
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

      {/* Open Source & Innovation */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Open Source & Innovation
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Contributing to the developer community with open-source projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {openSourceProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg border-slate-200 dark:border-slate-700 hover:border-purple-500/50 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="mb-2">{project.name}</h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        {project.description}
                      </p>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 dark:text-slate-400 hover:text-purple-500 transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <TrendingUp className="w-4 h-4 text-yellow-500" />
                    <span>{project.stars.toLocaleString()} stars</span>
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
