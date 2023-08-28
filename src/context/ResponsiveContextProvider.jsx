import { useState, createContext, useContext, useEffect } from "react";
import PropTypes from 'prop-types'

const RespContext = createContext();

RespContext.displayName = "resp";

const ResponsiveContextProvider = ({ children }) => {
  
const [windowWidth, setWindowWidth] = useState(window.innerWidth)


useEffect(() => {
    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
      };
  window.addEventListener('resize', updateWindowWidth);
  return () => {
    window.removeEventListener('resize', updateWindowWidth);
  };
}, []);

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
