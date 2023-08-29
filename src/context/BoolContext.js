// BoolContext.js
import React, { createContext, useContext, useState } from 'react';

const BoolContext = createContext();

export const BoolProvider = ({ children }) => {
  const [booleanValue, setBooleanValue] = useState(false);

  return (
    <BoolContext.Provider value={{ booleanValue, setBooleanValue }}>
      {children}
    </BoolContext.Provider>
  );
};

export const useBoolContext = () => useContext(BoolContext);
