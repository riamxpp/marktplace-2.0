const { createContext } = require("react");

export const LojaContext = createContext();

export const LojaStorage = ({ children }) => {
  return <LojaContext.Provider value={{}}>{children}</LojaContext.Provider>;
};
