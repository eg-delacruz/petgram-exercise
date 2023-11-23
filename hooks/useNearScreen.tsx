import { useEffect, useState, useRef, LegacyRef } from 'react';

// Hook to lazyload objects
const useNearScreen = () => {
  const element = useRef<HTMLElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window.IntersectionObserver !== 'undefined') {
      // Creating observer
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
      // Executing observer
      if (element.current) {
        // Check if element is not null before observing
        observer.observe(element.current);
      }
    }
  }, [element]);

  return [show, element];
};

export default useNearScreen;
