import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AmbientGlows from './components/AmbientGlows';
import ModalConfirmation from './components/ModalConfirmation';
import PageLoader from './components/PageLoader';

// Lazy-loaded page views for code-splitting and fast initial load
const LandingPage = lazy(() => import('./views/LandingPage'));
const ServicesPage = lazy(() => import('./views/ServicesPage'));
const ApplicationPage = lazy(() => import('./views/ApplicationPage'));

// Helper to scroll to top or target anchor on route / hash change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
}

// Animated Page Wrapper for smooth route transitions
const PageTransitionWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -14 }}
    transition={{ duration: 0.35, ease: 'easeOut' }}
    className="w-full"
  >
    {children}
  </motion.div>
);

export default function App() {
  const [modalData, setModalData] = useState({ isOpen: false, data: null });
  const location = useLocation();

  const openModal = (data) => {
    setModalData({ isOpen: true, data });
  };

  const closeModal = () => {
    setModalData({ isOpen: false, data: null });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between relative selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* Dynamic Ambient Glow Orbs in Background */}
      <AmbientGlows />

      {/* Automatic Scroll & Anchor Restoration */}
      <ScrollToTop />

      {/* Sticky Top Navigation Bar */}
      <Navbar />

      {/* Main View Body with Suspense, AnimatePresence & Lazy Loading */}
      <main className="flex-1 w-full relative z-10">
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageTransitionWrapper>
                    <LandingPage onOpenModal={openModal} />
                  </PageTransitionWrapper>
                }
              />
              <Route
                path="/services"
                element={
                  <PageTransitionWrapper>
                    <ServicesPage />
                  </PageTransitionWrapper>
                }
              />
              <Route
                path="/apply"
                element={
                  <PageTransitionWrapper>
                    <ApplicationPage onOpenModal={openModal} />
                  </PageTransitionWrapper>
                }
              />
              <Route
                path="/application"
                element={
                  <PageTransitionWrapper>
                    <ApplicationPage onOpenModal={openModal} />
                  </PageTransitionWrapper>
                }
              />
              <Route
                path="*"
                element={
                  <PageTransitionWrapper>
                    <LandingPage onOpenModal={openModal} />
                  </PageTransitionWrapper>
                }
              />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* Glassmorphic Submission Confirmation Modal */}
      <ModalConfirmation
        isOpen={modalData.isOpen}
        onClose={closeModal}
        data={modalData.data}
      />
    </div>
  );
}
