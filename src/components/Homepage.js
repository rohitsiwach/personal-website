import React, { useState, useEffect } from 'react';
import HeroSection from './Homepage/HeroSection';
import AboutSection from './Homepage/AboutSection';
import ContactSection from './Homepage/ContactSection';
import MenuHint from './Homepage/MenuHint';

function Homepage() {
  const [showMenuHint, setShowMenuHint] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check initial screen size
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    // Only show hint on mobile screens
    if (!isMobile) return;
    
    const timer = setTimeout(() => {
      setShowMenuHint(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isMobile]);

  const handleMenuHintClick = () => {
    setShowMenuHint(false);
    // Trigger the burger menu by dispatching a custom event
    const burgerMenu = document.querySelector('.burger-menu');
    if (burgerMenu) {
      burgerMenu.click();
    }
  };

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ContactSection />
      <MenuHint 
        showMenuHint={showMenuHint} 
        handleMenuHintClick={handleMenuHintClick} 
      />
    </div>
  );
}

export default Homepage; 