import { useEffect } from 'react';
import { useLocation } from 'react-router';

/**
 * ScrollToTop Utility
 * Ensures the window scrolls to the top whenever the route changes.
 */
const ScrollToTop = () => {
  // Current pathname from the router
  const { pathname } = useLocation();

  useEffect(() => {
    // Force scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]); // Only re-run when the pathname changes

  return null;
};

export default ScrollToTop;