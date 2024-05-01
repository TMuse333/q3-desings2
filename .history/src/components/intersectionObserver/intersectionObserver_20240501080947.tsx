import { useEffect, useState } from 'react';

const useIntersectionObserver = (inViewProp: boolean, componentRef: React.RefObject<HTMLElement>) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(inViewProp); // Update isVisible state based on inViewProp initially
  }, [inViewProp]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update the state based on whether the component is in view
        if(entry.isIntersecting)
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.8,
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, [componentRef, inViewProp]); // Include componentRef and inViewProp in the dependency array

  return { isVisible };
};

export default useIntersectionObserver;
