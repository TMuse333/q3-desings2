import { useEffect, useRef, Dispatch, SetStateAction } from "react";

interface IntersectionObserverOptions {
  root: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

const useIntersectionObserver = (
  setInView: Dispatch<SetStateAction<boolean>>,
  options: IntersectionObserverOptions
) => {
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Update the state based on whether the component is in view
      if (entry.isIntersecting) {
        setInView(true);
        con
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
