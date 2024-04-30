// TextYPositionContext.tsx

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Define the type for the context value
interface TextYPositionContextType {
  textYPosition: number;
  setTextYPosition: React.Dispatch<React.SetStateAction<number>>;
}

// Create the context
export const TextYPositionContext = createContext<TextYPositionContextType | undefined>(undefined);

// Create a provider component
export const PositionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize the textYPosition state
  const [textYPosition, setTextYPosition] = useState<number>(0);

  useEffect(()=> {
    console.log('setting the motion y value',textYPosition)
  },[textYPosition])

  return (
    <TextYPositionContext.Provider value={{ textYPosition, setTextYPosition }}>
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
