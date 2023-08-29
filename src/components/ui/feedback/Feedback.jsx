import React, { useEffect } from "react";

import "../../../styles/index.css";
import { useAuthCtx } from "../../../context/AuthProvider";

function Feedback() {
  const { feedback, isVisible, setIsVisible } = useAuthCtx();
  const { show, type, msg } = feedback;

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 1200);
  }, [isVisible]);

  return show ? (
    <div className={`feedback-container ${type} ${isVisible ? "visible" : ""}`}>
      <p className="msg">{msg}</p>
    </div>
  ) : null;
}

export default Feedback;
