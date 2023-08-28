import React from 'react'
import { useItemsCtx } from '../../../context/ItemsContextProvider';
import '../../../styles/index.css'
import { useRespCtx } from '../../../context/ResponsiveContextProvider';

function LeftSideOverlay() {
    const { cartIsOpen } = useItemsCtx();
    const { windowWidth } = useRespCtx();
  
    const overlayStyles = {
        display: cartIsOpen && windowWidth >= 1024 ? '' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 3,
    pointerEvents: cartIsOpen ? 'auto' : 'none', 
    transform: cartIsOpen ? 'translateX(0)' : 'translateX(100%)', 
    transition: 'transform 0.3s ease', 
};
  
    return <div className='overlay-fade' style={overlayStyles}></div>;
  }

export default LeftSideOverlay