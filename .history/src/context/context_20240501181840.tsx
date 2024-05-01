// TextYPositionContext.tsx

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Define the type for the context value
interface TextYPositionContextType {
  textYPosition: number;
  setTextYPosition: React.Dispatch<React.SetStateAction<number>>;
  isMobile:boolean;
  setIsMobile: React.Dispatch<React.setStateAction<
}

// Create the context
export const TextYPositionContext = createContext<TextYPositionContextType | undefined>(undefined);

// Create a provider component
export const PositionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize the textYPosition state
  const [textYPosition, setTextYPosition] = useState<number>(0);

const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 655)

useEffect(()=> {
  const handleScroll = () => {
    setIsMobile(window.innerWidth <= 655)
  }
  window.addEventListener('scroll',handleScroll)
  handleScroll()

  return () => {
    window.removeEventListener('scroll',handleScroll)
  }
},[])

useEffect(()=> {
  console.log('is mobile',isMobile)
},[isMobile])

const value = {
  textYPosition,
   setTextYPosition,
   isMobile
}

  return (
    <TextYPositionContext.Provider value={value}>
      {children}
    </TextYPositionContext.Provider>
  );
};

export const useTextYPositionContext = (): TextYPositionContextType => {
  const context = useContext(TextYPositionContext);
  if (!context) {
    throw new Error('useTextYPositionContext must be used within a PositionProvider');
  }
  return context;
};
