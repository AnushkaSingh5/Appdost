import { motion } from 'motion/react';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: 'The Future of Web Development in 2025',
      excerpt:
        'Exploring emerging trends and technologies shaping the future of web development. From AI-powered development tools to serverless architectures, discover what\'s next in the web development landscape.',
      content:
        'The web development landscape is evolving at an unprecedented pace. AI-powered tools are revolutionizing how we write code, serverless architectures are changing deployment strategies, and edge computing is bringing applications closer to users than ever before.',
      image: 'https://images.unsplash.com/photo-1565489032347-cd8c5eecf29c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwYmxvZyUyMGFydGljbGV8ZW58MXx8fHwxNzYxMzA4NzAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      author: 'Sarah Johnson',
      date: 'Oct 20, 2025',
      readTime: '5 min read',
      category: 'Web Development',
      tags: ['AI', 'Serverless', 'Trends'],
    },
    {
      id: 2,
      title: 'Building Scalable Microservices Architecture',
      excerpt:
        'Best practices for designing and implementing microservices architecture. Learn how to break down monolithic applications into scalable, maintainable services.',
      content:
        'Microservices architecture has become the de facto standard for building scalable applications. This comprehensive guide covers service decomposition, inter-service communication, data management, and deployment strategies.',
      image: 'https://images.unsplash.com/photo-1628017974725-18928e8e8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwb2ZmaWNlfGVufDF8fHx8MTc2MTMxMTg1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      author: 'Michael Chen',
      date: 'Oct 18, 2025',
      readTime: '8 min read',
      category: 'Architecture',
      tags: ['Microservices', 'Backend', 'Scalability'],
    },
    {
      id: 3,
      title: 'AI Integration in Modern Applications',
      excerpt:
        'How to effectively integrate AI capabilities into your applications. From chatbots to recommendation engines, explore practical AI implementation strategies.',
      content:
        'Artificial intelligence is no longer a luxury - it\'s becoming essential for modern applications. This article explores practical ways to integrate AI, including natural language processing, computer vision, and machine learning models.',
      image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NjEzMjExOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      author: 'Emily Rodriguez',
      date: 'Oct 15, 2025',
      readTime: '6 min read',
      category: 'Artificial Intelligence',
      tags: ['AI', 'ML', 'Integration'],
    },
    {
      id: 4,
      title: 'Mobile-First Design Principles',
      excerpt:
        'Creating responsive experiences that prioritize mobile users. Learn the fundamental principles of mobile-first design and development.',
      content:
        'With mobile devices accounting for over 60% of web traffic, mobile-first design is no longer optional. This guide covers responsive design patterns, touch-friendly interfaces, and performance optimization for mobile.',
      image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjEzMTMxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      author: 'David Kim',
      date: 'Oct 12, 2025',
      readTime: '7 min read',
      category: 'Design',
      tags: ['Mobile', 'UX', 'Responsive'],
    },
    {
      id: 5,
      title: 'Cloud-Native Development Best Practices',
      excerpt:
        'Building applications designed for the cloud from the ground up. Discover containerization, orchestration, and cloud-native patterns.',
      content:
        'Cloud-native development leverages the full potential of cloud computing. This article covers Docker, Kubernetes, serverless functions, and strategies for building resilient, scalable applications.',
      image: 'https://images.unsplash.com/photo-1658552963426-1083cf9c495e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc2MTQwOTcwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      author: 'Alex Thompson',
      date: 'Oct 10, 2025',
      readTime: '9 min read',
      category: 'Cloud',
      tags: ['Cloud', 'DevOps', 'Kubernetes'],
    },
    {
      id: 6,
      title: 'Security Best Practices for Web Apps',
      excerpt:
        'Protecting your web applications from common vulnerabilities. Essential security practices every developer should implement.',
      content:
        'Security should be a priority from day one. This comprehensive guide covers authentication, authorization, data encryption, CORS, CSP, and protecting against common attacks like XSS and SQL injection.',
      image: 'https://images.unsplash.com/photo-1628017974725-18928e8e8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwb2ZmaWNlfGVufDF8fHx8MTc2MTMxMTg1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      author: 'Jessica Martinez',
      date: 'Oct 8, 2025',
      readTime: '10 min read',
      category: 'Security',
      tags: ['Security', 'Best Practices', 'Authentication'],
    },
  ];

  const categories = [
    'All',
    'Web Development',
    'Mobile',
    'AI & ML',
    'Cloud',
    'Design',
    'Security',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <motion.div
            className="absolute top-1/4 left-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
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
              Tech Insights & Articles
            </h1>
            <p className="text-slate-600 dark:text-slate-300">
              Stay updated with the latest trends, best practices, and insights from our team of
              experts in web development, mobile apps, AI, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full transition-all ${
                  index === 0
                    ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden h-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-purple-500/50 transition-all hover:shadow-2xl">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-purple-600 dark:text-purple-400">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* Title & Excerpt */}
                    <h3 className="mb-3 line-clamp-2">{article.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Author & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <Button
                        variant="ghost"
                        className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 p-0"
                      >
                        Read More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-12 md:p-16"
          >
            <div className="relative z-10 text-center text-white max-w-2xl mx-auto">
              <h2 className="mb-4">Subscribe to Our Newsletter</h2>
              <p className="mb-8 opacity-90">
                Get the latest articles, tutorials, and tech insights delivered directly to your
                inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button className="bg-white text-purple-600 hover:bg-slate-100 border-0 rounded-full whitespace-nowrap">
                  Subscribe
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
