import { useEffect, useRef } from "react";

const useIntersectionObserver = (setInView, options) => {
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Update the state based on whether the component is in view
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, [setInView, options]);

  return componentRef;
};

export default useIntersectionObserver;
