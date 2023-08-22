import React, { useEffect } from "react";
import { useAuthCtx } from "../../store/AuthProvider";
import '../../styles/index.css'

function Feedback() {
  const { feedback, ui, isVisible, setIsVisible } = useAuthCtx();
  const { show, type, msg } = feedback;

useEffect(() => {setTimeout(() => {setIsVisible(false)}, 1200)}, [isVisible])

  return show ? (
    <div className={`feedback-container ${type} ${isVisible ? 'visible' : ''}`}>
      <p className="msg">{msg}</p>
      {/* <button className="close-button" onClick={() => ui.closeAlert()}>
        &times;
      </button> */}
    </div>
  ) : null;
}

export default Feedback;