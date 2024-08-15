import React, { useEffect, useState } from "react";

import "../../../styles/index.css";
import { useAuthCtx } from "../../../context/AuthProvider";

function Feedback() {
  const { feedback, isVisible, setIsVisible, feedbackQueue } = useAuthCtx();
  const { show, type, msg } = feedback;

  useEffect(() => {
    if (feedbackQueue && feedbackQueue.length > 0 && !isVisible) {
      setIsVisible(true);
    }
  }, [isVisible, feedbackQueue]);

  return (
    <div className={`feedback-container ${type} ${feedbackQueue.length > 0 ? "visible" : "not-visible"}`}>
      <p className="msg">{msg}</p>
    </div>
  ) 
}

export default Feedback;
