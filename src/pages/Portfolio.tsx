import { motion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface PortfolioProps {
  onNavigate: (page: string, projectId?: number) => void;
}

export default function Portfolio({ onNavigate }: PortfolioProps) {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description:
        'A comprehensive e-commerce solution featuring AI-powered product recommendations, real-time inventory management, and seamless payment integration.',
      image: 'https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxMzYxODQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'Node.js', 'MongoDB', 'AI'],
      metrics: {
        users: '50K+',
        revenue: '$2M+',
        performance: '98%',
      },
    },
    {
      id: 2,
      title: 'Health & Fitness App',
      category: 'Mobile Development',
      description:
        'Cross-platform mobile application for fitness tracking with personalized workout plans, nutrition guidance, and social features.',
      image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjEzMTMxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React Native', 'Firebase', 'ML'],
      metrics: {
        downloads: '100K+',
        rating: '4.8/5',
        retention: '85%',
      },
    },
    {
      id: 3,
      title: 'SaaS Analytics Dashboard',
      category: 'Web Development',
      description:
        'Enterprise analytics platform with real-time data visualization, predictive analytics, and customizable reporting features.',
      image: 'https://images.unsplash.com/photo-1658552963426-1083cf9c495e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc2MTQwOTcwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Vue.js', 'Python', 'PostgreSQL'],
      metrics: {
        clients: '500+',
        dataPoints: '10M+',
        uptime: '99.9%',
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
            animate={{
              y: [0, -50, 0],
              x: [0, 50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-slate-600 dark:text-slate-300">
              Showcasing our successful projects and the impact we've made for our clients across
              various industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="overflow-hidden bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-purple-500/50 transition-all hover:shadow-2xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Image */}
                    <motion.div
                      className="relative h-64 lg:h-auto overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-purple-600 dark:text-purple-400">
                          {project.category}
                        </span>
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-between">
                      <div>
                        <h2 className="mb-4">{project.title}</h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/30 dark:via-purple-950/30 dark:to-pink-950/30 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                          {Object.entries(project.metrics).map(([key, value], i) => (
                            <div key={i} className="text-center p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
                              <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                {value}
                              </div>
                              <div className="text-slate-500 dark:text-slate-400 capitalize">
                                {key}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div>
                        <Button
                          onClick={() => onNavigate('portfolio-detail', project.id)}
                          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0 w-full sm:w-auto"
                        >
                          View Details
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next project and create something that makes an impact.
            </p>
            <Button
              onClick={() => onNavigate('contact')}
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0 shadow-lg"
            >
              Start Your Project
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
