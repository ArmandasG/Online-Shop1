import { useState, createContext, useContext, useEffect } from "react";
import PropTypes from 'prop-types'

const RespContext = createContext();

RespContext.displayName = "resp";

const ResponsiveContextProvider = ({ children }) => {
  
const [windowWidth, setWindowWidth] = useState(window.innerWidth)

const updateWindowWidth = () => {
  setWindowWidth(window.innerWidth);
};

useEffect(() => {
  // Set up event listener for window resize
  window.addEventListener('resize', updateWindowWidth);
  // Clean up the event listener on unmount
  return () => {
    window.removeEventListener('resize', updateWindowWidth);
  };
}, [windowWidth]);

  const contextValue = {
    windowWidth
  };

  return (
    <RespContext.Provider value={contextValue}>
      {children}
    </RespContext.Provider>
  );
};

export default ResponsiveContextProvider;

export function useRespCtx() {
  return useContext(RespContext);
}
ResponsiveContextProvider.propTypes = {
  children: PropTypes.node,
}
