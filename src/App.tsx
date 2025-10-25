import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import PortfolioDetail from './pages/PortfolioDetail';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

type Page = 'home' | 'services' | 'portfolio' | 'portfolio-detail' | 'careers' | 'blog' | 'contact';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<number>(1);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleNavigate = (page: string, projectId?: number) => {
    setCurrentPage(page as Page);
    if (projectId) {
      setSelectedProjectId(projectId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      case 'portfolio':
        return <Portfolio onNavigate={handleNavigate} />;
      case 'portfolio-detail':
        return <PortfolioDetail onNavigate={handleNavigate} projectId={selectedProjectId} />;
      case 'careers':
        return <Careers />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen">
          <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
          <main>{renderPage()}</main>
          <Footer onNavigate={handleNavigate} />
          <WhatsAppButton />
        </div>
      )}
    </>
  );
}
