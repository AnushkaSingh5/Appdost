import { motion } from 'motion/react';
import {
  Code,
  Smartphone,
  Palette,
  Cloud,
  Brain,
  Server,
  Lightbulb,
  Users,
  Rocket,
  CheckCircle,
  TestTube,
  Package,
  ArrowRight,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description:
        'Full-stack web applications using React, Vue, Angular, Node.js, and modern frameworks. Scalable, secure, and performant solutions.',
      features: ['Custom Web Apps', 'E-Commerce', 'CMS Development', 'API Integration'],
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description:
        'Native and cross-platform mobile applications for iOS and Android with seamless user experiences.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'Progressive Web Apps'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description:
        'User-centered design that combines aesthetics with functionality. From wireframes to high-fidelity prototypes.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description:
        'Cloud infrastructure setup, migration, and optimization on AWS, Azure, and Google Cloud Platform.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'Serverless', 'Microservices'],
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description:
        'Intelligent solutions powered by artificial intelligence and machine learning algorithms.',
      features: ['Predictive Analytics', 'NLP', 'Computer Vision', 'Recommendation Systems'],
    },
    {
      icon: Server,
      title: 'DevOps & Infrastructure',
      description:
        'Continuous integration and deployment pipelines, containerization, and infrastructure as code.',
      features: ['CI/CD Pipelines', 'Docker & Kubernetes', 'Monitoring', 'Security'],
    },
  ];

  const developmentProcess = [
    {
      icon: Lightbulb,
      title: 'Discovery & Planning',
      description:
        'We start by understanding your business goals, target audience, and project requirements through detailed consultations.',
    },
    {
      icon: Palette,
      title: 'Design & Prototyping',
      description:
        'Creating wireframes and interactive prototypes to visualize the final product and gather feedback early.',
    },
    {
      icon: Code,
      title: 'Development',
      description:
        'Agile development with regular sprints, code reviews, and continuous integration to ensure quality.',
    },
    {
      icon: TestTube,
      title: 'Testing & QA',
      description:
        'Comprehensive testing including unit tests, integration tests, and user acceptance testing.',
    },
    {
      icon: Rocket,
      title: 'Deployment',
      description:
        'Smooth deployment to production with zero-downtime strategies and proper monitoring setup.',
    },
    {
      icon: Users,
      title: 'Support & Maintenance',
      description:
        'Ongoing support, updates, and optimization to keep your application running smoothly.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full blur-3xl"
            animate={{
              y: [0, 100, 0],
              x: [0, 50, 0],
            }}
            transition={{
              duration: 20,
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
              Our Services
            </h1>
            <p className="text-slate-600 dark:text-slate-300">
              Comprehensive digital solutions designed to transform your business and drive growth.
              From concept to deployment, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              What We Offer
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Full-spectrum digital services tailored to your unique needs
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
                <Card className="p-8 h-full bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg border-slate-200 dark:border-slate-700 hover:border-purple-500/50 transition-all hover:shadow-2xl">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-3">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Development Process
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A proven methodology that ensures quality, transparency, and timely delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg border-slate-200 dark:border-slate-700 hover:border-purple-500/50 transition-all">
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg">
                    {index + 1}
                  </div>
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-pink-900/30 flex items-center justify-center mb-4 ml-auto">
                    <step.icon className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="mb-3">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{step.description}</p>
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
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-12 md:p-16"
          >
            <div className="relative z-10 text-center text-white">
              <h2 className="mb-4">Ready to Start Your Project?</h2>
              <p className="mb-8 max-w-2xl mx-auto opacity-90">
                Let's discuss how we can help bring your vision to life with our expertise and
                cutting-edge technology.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  onClick={() => onNavigate('contact')}
                  className="bg-white text-purple-600 hover:bg-slate-100 border-0 shadow-lg"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  onClick={() => onNavigate('portfolio')}
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  View Our Work
                </Button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
