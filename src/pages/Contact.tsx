import { motion } from 'motion/react';
import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  MessageCircle,
  Clock,
  Globe,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const contactOptions = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us an email anytime',
      value: 'info@gradienttech.com',
      link: 'mailto:info@gradienttech.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Mon-Fri from 9am to 6pm',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Our Offices',
      description: 'Visit our locations',
      value: 'View office locations',
      link: '#offices',
    },
    {
      icon: MessageCircle,
      title: 'Social Media',
      description: 'Follow us on social',
      value: 'Connect with us',
      link: '#social',
    },
  ];

  const offices = [
    {
      name: 'Headquarters - San Francisco',
      address: '123 Tech Street, Silicon Valley, CA 94025',
      phone: '+1 (555) 123-4567',
      email: 'sf@gradienttech.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
      mapLink: 'https://maps.google.com',
    },
    {
      name: 'New York Office',
      address: '456 Innovation Ave, New York, NY 10001',
      phone: '+1 (555) 234-5678',
      email: 'ny@gradienttech.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
      mapLink: 'https://maps.google.com',
    },
    {
      name: 'Austin Office',
      address: '789 Startup Blvd, Austin, TX 78701',
      phone: '+1 (555) 345-6789',
      email: 'austin@gradienttech.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
      mapLink: 'https://maps.google.com',
    },
  ];

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer:
        'Project timelines vary depending on scope and complexity. A typical web application takes 8-16 weeks, while mobile apps can take 12-20 weeks. We provide detailed timelines during the discovery phase.',
    },
    {
      question: 'Do you offer ongoing support and maintenance?',
      answer:
        'Yes! We offer comprehensive support and maintenance packages that include bug fixes, updates, security patches, and feature enhancements. We can tailor a support plan to meet your specific needs.',
    },
    {
      question: 'What technologies do you specialize in?',
      answer:
        'We specialize in modern web technologies including React, Vue, Angular, Node.js, Python, and cloud platforms like AWS and Azure. For mobile, we work with React Native and Flutter.',
    },
    {
      question: 'How do you handle project communication?',
      answer:
        'We use agile methodologies with regular sprint reviews, daily standups, and continuous communication through Slack or your preferred platform. You\'ll have full visibility into the development process.',
    },
    {
      question: 'What are your payment terms?',
      answer:
        'We typically work with milestone-based payments. A deposit is required to begin work, with subsequent payments tied to project milestones. We can discuss flexible payment options based on your needs.',
    },
    {
      question: 'Can you work with our existing team?',
      answer:
        'Absolutely! We can augment your existing team or work as an independent development partner. We\'re experienced in collaborating with in-house teams and integrate seamlessly into your workflow.',
    },
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: 'Fast Response',
      description: 'We respond to all inquiries within 24 hours',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with local expertise',
    },
    {
      icon: MessageCircle,
      title: 'Clear Communication',
      description: 'Transparent and regular project updates',
    },
    {
      icon: Mail,
      title: 'Dedicated Support',
      description: 'Assigned project manager for your needs',
    },
    {
      icon: Phone,
      title: 'Always Available',
      description: 'Multiple channels to reach us',
    },
    {
      icon: MapPin,
      title: 'Multiple Locations',
      description: 'Offices in major tech hubs',
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-500' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-700' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-600' },
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-slate-900 dark:hover:text-white' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent successfully! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <motion.div
            className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-indigo-500/30 rounded-full blur-3xl"
            animate={{
              y: [0, 60, 0],
              x: [0, -40, 0],
            }}
            transition={{
              duration: 16,
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
              Get In Touch
            </h1>
            <p className="text-slate-600 dark:text-slate-300">
              Have a project in mind? Let's discuss how we can help bring your vision to life.
              We're here to answer your questions and start building something amazing together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactOptions.map((option, index) => (
              <motion.a
                key={index}
                href={option.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full text-center bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg border-slate-200 dark:border-slate-700 hover:border-purple-500/50 transition-all cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mb-2">{option.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-2">{option.description}</p>
                  <p className="text-purple-600 dark:text-purple-400">{option.value}</p>
                </Card>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Send Us a Message
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <Card className="p-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg border-slate-200 dark:border-slate-700">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Your Name *</Label>
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
                    <Label htmlFor="email">Your Email *</Label>
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

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="How can we help?"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project..."
                      rows={6}
                      className="mt-2"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0 shadow-lg"
                  >
                    <Send className="mr-2 w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Info & Social */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-purple-500 mt-1" />
                    <div>
                      <p>Email</p>
                      <a
                        href="mailto:info@gradienttech.com"
                        className="text-slate-600 dark:text-slate-400 hover:text-purple-500 transition-colors"
                      >
                        info@gradienttech.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-purple-500 mt-1" />
                    <div>
                      <p>Phone</p>
                      <a
                        href="tel:+15551234567"
                        className="text-slate-600 dark:text-slate-400 hover:text-purple-500 transition-colors"
                      >
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-purple-500 mt-1" />
                    <div>
                      <p>Headquarters</p>
                      <p className="text-slate-600 dark:text-slate-400">
                        123 Tech Street, Silicon Valley, CA 94025
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="social">
                <h3 className="mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 ${social.color} transition-colors`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-6">Business Hours</h3>
                <div className="space-y-2 text-slate-600 dark:text-slate-400">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section id="offices" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Office Locations
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Visit us at one of our locations or schedule a virtual meeting
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-purple-500/50 transition-all">
                  <h3 className="mb-4">{office.name}</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                      <MapPin className="w-4 h-4 mt-1 text-purple-500" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <Phone className="w-4 h-4 text-purple-500" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <Mail className="w-4 h-4 text-purple-500" />
                      <span>{office.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <Clock className="w-4 h-4 text-purple-500" />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                  <Button
                    onClick={() => window.open(office.mapLink, '_blank')}
                    variant="outline"
                    className="w-full border-purple-500 text-purple-600 dark:text-purple-400"
                  >
                    View on Map
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Find answers to common questions about our services and processes
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-6"
                >
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-slate-600 dark:text-slate-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Why Choose Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-6 text-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="mb-2">{item.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
