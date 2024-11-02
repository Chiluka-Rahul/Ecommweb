
import React, { createContext, useContext, useState } from 'react';

const HidContext = createContext();

export const useHid = () => useContext(HidContext);

export const HidProvider = ({ children }) => {
  const [hid, setHid] = useState(true);

  return (
    <HidContext.Provider value={{ hid, setHid }}>
      {children}
    </HidContext.Provider>
  );
};
