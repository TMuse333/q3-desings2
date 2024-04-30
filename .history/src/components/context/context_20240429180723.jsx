// TextYPositionContext.js

import React, { createContext, useState, useContext } from 'react';

// Create the context
export const TextYPositionContext = createContext();

// Create a provider component
export const PositionProvider = ({ children }) => {
  // Initialize the textYPosition state
  const [textYPosition, setTextYPosition] = useState(0);

  return (
    <TextYPositionContext.Provider value={{ textYPosition, setTextYPosition }}>
      {children}
    </TextYPositionContext.Provider>
  );
};

export const useTextYPositionContext = () => {
  const context = useContext(TextYPositionContext)
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context
}


