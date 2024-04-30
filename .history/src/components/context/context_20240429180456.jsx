// TextYPositionContext.js

import React, { createContext, useState, useContext } from 'react';

// Create the context
export const TextYPositionContext = createContext();

// Create a provider component
export const TextYPositionProvider = ({ children }) => {
  // Initialize the textYPosition state
  const [textYPosition, setTextYPosition] = useState(0);

  return (
    <TextYPositionContext.Provider value={{ textYPosition, setTextYPosition }}>
      {children}
    </TextYPositionContext.Provider>
  );
};

export const use


