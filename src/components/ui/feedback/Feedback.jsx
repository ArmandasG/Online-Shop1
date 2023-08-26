import React, { useEffect } from "react";

import '../../../styles/index.css'
import { useAuthCtx } from "../../../store/AuthProvider";

function Feedback() {
  const { feedback, isVisible, setIsVisible } = useAuthCtx();
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