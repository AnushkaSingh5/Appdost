import { motion } from 'motion/react';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Target,
  CheckCircle,
  Play,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface PortfolioDetailProps {
  onNavigate: (page: string) => void;
  projectId: number;
}

export default function PortfolioDetail({ onNavigate, projectId }: PortfolioDetailProps) {
  const projectData: Record<number, any> = {
    1: {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      tagline: 'Transforming Online Shopping with AI',
      description:
        'A comprehensive e-commerce solution that leverages artificial intelligence to provide personalized shopping experiences, real-time inventory management, and seamless payment processing.',
      image: 'https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxMzYxODQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      client: 'ShopHub Inc.',
      duration: '6 months',
      teamSize: '8 members',
      technologies: ['React', 'Node.js', 'MongoDB', 'TensorFlow', 'AWS', 'Stripe'],
      challenges: [
        'Implementing real-time inventory sync across multiple warehouses',
        'Building an AI recommendation engine with high accuracy',
        'Ensuring sub-second page load times despite complex features',
        'Handling peak traffic during sales events',
      ],
      solutions: [
        'Implemented event-driven architecture with Redis for real-time updates',
        'Trained custom ML models using customer behavior data',
        'Optimized with lazy loading, CDN, and advanced caching strategies',
        'Auto-scaling infrastructure with load balancing',
      ],
      results: [
        '300% increase in conversion rate',
        '50K+ active users within first 3 months',
        '$2M+ in revenue generated',
        '98% customer satisfaction score',
      ],
      websiteUrl: 'https://example-ecommerce.com',
      playStoreUrl: null,
      githubUrl: null,
    },
    2: {
      title: 'Health & Fitness App',
      category: 'Mobile Development',
      tagline: 'Your Personal Fitness Companion',
      description:
        'A cross-platform mobile application that combines fitness tracking, personalized workout plans, nutrition guidance, and social features to help users achieve their health goals.',
      image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjEzMTMxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      client: 'FitLife Technologies',
      duration: '4 months',
      teamSize: '5 members',
      technologies: ['React Native', 'Firebase', 'TensorFlow Lite', 'HealthKit', 'Google Fit'],
      challenges: [
        'Integrating with multiple health data sources',
        'Creating accurate workout tracking algorithms',
        'Ensuring battery-efficient background tracking',
        'Building engaging social features',
      ],
      solutions: [
        'Built unified API layer for health data aggregation',
        'Developed custom ML models for exercise recognition',
        'Implemented smart batching and efficient sensor usage',
        'Created gamification system with achievements and leaderboards',
      ],
      results: [
        '100K+ downloads in 2 months',
        '4.8/5 average rating',
        '85% user retention rate',
        'Featured on App Store',
      ],
      websiteUrl: 'https://example-fitness.com',
      playStoreUrl: 'https://play.google.com/store',
      githubUrl: null,
    },
    3: {
      title: 'SaaS Analytics Dashboard',
      category: 'Web Development',
      tagline: 'Data-Driven Business Intelligence',
      description:
        'An enterprise-grade analytics platform that provides real-time data visualization, predictive analytics, and customizable reporting to help businesses make informed decisions.',
      image: 'https://images.unsplash.com/photo-1658552963426-1083cf9c495e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc2MTQwOTcwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      client: 'DataViz Corp',
      duration: '8 months',
      teamSize: '10 members',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
      challenges: [
        'Processing millions of data points in real-time',
        'Creating intuitive visualizations for complex data',
        'Ensuring data security and compliance',
        'Building scalable infrastructure',
      ],
      solutions: [
        'Implemented stream processing with Apache Kafka',
        'Designed interactive charts with D3.js and custom libraries',
        'Applied end-to-end encryption and role-based access',
        'Deployed microservices architecture on Kubernetes',
      ],
      results: [
        '500+ enterprise clients',
        '10M+ data points processed daily',
        '99.9% uptime SLA',
        '40% reduction in reporting time',
      ],
      websiteUrl: 'https://example-analytics.com',
      playStoreUrl: null,
      githubUrl: null,
    },
  };

  const project = projectData[projectId] || projectData[1];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 pt-20">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Button
          onClick={() => onNavigate('portfolio')}
          variant="ghost"
          className="text-purple-600 dark:text-purple-400"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Portfolio
        </Button>
      </div>

      {/* Hero Section */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-pink-900/30 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800 mb-4 inline-block">
              {project.category}
            </span>
            <h1 className="mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              {project.tagline}
            </p>

            {/* Project Info */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Users className="w-5 h-5 text-purple-500" />
                <span>Client: {project.client}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Calendar className="w-5 h-5 text-purple-500" />
                <span>Duration: {project.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Target className="w-5 h-5 text-purple-500" />
                <span>Team: {project.teamSize}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.websiteUrl && (
                <Button
                  onClick={() => window.open(project.websiteUrl, '_blank')}
                  className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0"
                >
                  <ExternalLink className="mr-2 w-4 h-4" />
                  Visit Website
                </Button>
              )}
              {project.playStoreUrl && (
                <Button
                  onClick={() => window.open(project.playStoreUrl, '_blank')}
                  variant="outline"
                  className="border-green-500 text-green-600 dark:text-green-400"
                >
                  <Play className="mr-2 w-4 h-4" />
                  Play Store
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  onClick={() => window.open(project.githubUrl, '_blank')}
                  variant="outline"
                  className="border-slate-500"
                >
                  <Github className="mr-2 w-4 h-4" />
                  View Code
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-96 md:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Project Overview
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>
              </motion.div>

              {/* Challenges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="mb-6">Challenges</h3>
                <div className="space-y-4">
                  {project.challenges.map((challenge: string, index: number) => (
                    <div key={index} className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                      </div>
                      <p className="text-slate-600 dark:text-slate-400">{challenge}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Solutions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="mb-6">Solutions</h3>
                <div className="space-y-4">
                  {project.solutions.map((solution: string, index: number) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-600 dark:text-slate-400">{solution}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="mb-6">Results & Impact</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.results.map((result: string, index: number) => (
                    <Card key={index} className="p-4 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/30 dark:via-purple-950/30 dark:to-pink-950/30 border-purple-200 dark:border-purple-800">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                          <span className="text-white">✓</span>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300">{result}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="sticky top-24"
              >
                <Card className="p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                  <h3 className="mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-pink-900/30 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Inspired by This Project?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can create something equally amazing for your business.
            </p>
            <Button
              onClick={() => onNavigate('contact')}
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0 shadow-lg"
            >
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
