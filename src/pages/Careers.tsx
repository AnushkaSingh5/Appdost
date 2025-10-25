import { motion } from 'motion/react';
import { useState } from 'react';
import {
  Rocket,
  Users,
  Heart,
  TrendingUp,
  Coffee,
  Award,
  MapPin,
  Clock,
  DollarSign,
  Upload,
  Send,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    portfolioUrl: '',
  });

  const highlights = [
    {
      icon: Rocket,
      title: 'Innovation First',
      description: 'Work with cutting-edge technologies and contribute to innovative projects.',
    },
    {
      icon: Users,
      title: 'Collaborative Team',
      description: 'Join a supportive team that values collaboration and knowledge sharing.',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear career progression paths with mentorship and learning opportunities.',
    },
    {
      icon: Coffee,
      title: 'Work-Life Balance',
      description: 'Flexible hours, remote work options, and unlimited PTO.',
    },
    {
      icon: Heart,
      title: 'Health Benefits',
      description: 'Comprehensive health insurance, wellness programs, and gym memberships.',
    },
    {
      icon: Award,
      title: 'Competitive Pay',
      description: 'Industry-leading salaries, bonuses, and stock options.',
    },
  ];

  const openings = [
    {
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120K - $180K',
      description:
        'We are looking for an experienced full-stack developer to lead our product development.',
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$90K - $130K',
      description:
        'Join our design team to create beautiful, user-friendly interfaces for our products.',
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$110K - $160K',
      description:
        'Help us build and maintain scalable infrastructure for our growing platform.',
    },
    {
      title: 'Mobile Developer (React Native)',
      department: 'Engineering',
      location: 'Remote / Austin',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$100K - $150K',
      description:
        'Build amazing mobile experiences for iOS and Android using React Native.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Application submitted successfully! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      coverLetter: '',
      portfolioUrl: '',
    });
  };

  const scrollToForm = () => {
    document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <motion.div
            className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
            animate={{
              y: [0, 80, 0],
              x: [0, -50, 0],
            }}
            transition={{
              duration: 18,
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
              Join Our Team
            </h1>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              Be part of a dynamic team that's shaping the future of technology. We're always
              looking for talented individuals who are passionate about innovation.
            </p>
            <Button
              onClick={scrollToForm}
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0 shadow-lg"
            >
              View Open Positions
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Why Work With Us
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We offer more than just a job - we provide a place where you can grow, innovate,
              and make a real impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg border-slate-200 dark:border-slate-700 hover:border-purple-500/50 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mb-2">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Current Openings
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Explore our open positions and find the perfect role for you
            </p>
          </motion.div>

          <div className="space-y-6 mb-12">
            {openings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 md:p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-purple-500/50 transition-all hover:shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3>{job.title}</h3>
                        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-pink-900/30 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800">
                          {job.department}
                        </span>
                      </div>

                      <p className="text-slate-600 dark:text-slate-400 mb-4">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-4 text-slate-600 dark:text-slate-400">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-purple-500" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-purple-500" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-purple-500" />
                          <span>{job.experience}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-purple-500" />
                          <span>{job.salary}</span>
                        </div>
                      </div>
                    </div>

                    <Button
                      onClick={scrollToForm}
                      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0 whitespace-nowrap"
                    >
                      Apply Now
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
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Don't see a position that fits? We're always looking for talented people.
            </p>
            <Button onClick={scrollToForm} variant="outline" className="border-purple-500">
              Send Us Your Resume
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-form" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Submit Your Resume
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <Card className="p-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg border-slate-200 dark:border-slate-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 123-4567"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="position">Position Applied For *</Label>
                    <Input
                      id="position"
                      required
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      placeholder="e.g., Senior Full-Stack Developer"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Input
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    placeholder="e.g., 5 years"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="portfolioUrl">Portfolio/LinkedIn URL</Label>
                  <Input
                    id="portfolioUrl"
                    type="url"
                    value={formData.portfolioUrl}
                    onChange={(e) =>
                      setFormData({ ...formData, portfolioUrl: e.target.value })
                    }
                    placeholder="https://"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="coverLetter">Cover Letter *</Label>
                  <Textarea
                    id="coverLetter"
                    required
                    value={formData.coverLetter}
                    onChange={(e) =>
                      setFormData({ ...formData, coverLetter: e.target.value })
                    }
                    placeholder="Tell us about yourself and why you'd be a great fit..."
                    rows={6}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="resume">Upload Resume *</Label>
                  <div className="mt-2 flex items-center justify-center w-full">
                    <label
                      htmlFor="resume"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg cursor-pointer bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-10 h-10 mb-3 text-slate-400" />
                        <p className="mb-2 text-slate-600 dark:text-slate-400">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-slate-500 dark:text-slate-500">
                          PDF, DOC, DOCX (MAX. 5MB)
                        </p>
                      </div>
                      <input id="resume" type="file" className="hidden" accept=".pdf,.doc,.docx" />
                    </label>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0 shadow-lg"
                >
                  <Send className="mr-2 w-4 h-4" />
                  Submit Application
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
