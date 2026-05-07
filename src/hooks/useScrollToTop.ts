import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook that scrolls the window to the top whenever the location changes
 * Useful for SPAs where navigation doesn't trigger a full page reload
 */
export function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

