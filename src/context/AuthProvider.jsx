import { useEffect, useState, useContext, createContext } from "react";
import PropTypes from "prop-types";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

const AuthContext = createContext({
  user: {},
  token: {},
  isLoggedIn: false,
  isLoading: false,
  feedbackQueue: [],
  feedback: {
    show: false,
    message: "",
    type: "",
  },
  setIsVisible: () => {},
  setFeedback: () => {},
  ui: {},
});

AuthContext.displayName = "Authentification";

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackQueue, setFeedbackQueue] = useState([]);
  const [feedback, setFeedback] = useState({
    show: false,
    msg: "",
    type: "",
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  useEffect(() => {
    if (feedbackQueue.length > 0 && !isVisible) {
      const currentFeedback = feedbackQueue[0];
      setFeedback({
        show: true,
        msg: currentFeedback.msg,
        type: currentFeedback.type,
      });
      setIsVisible(true);
    }
  }, [feedbackQueue, isVisible]);

  useEffect(() => {
      const timeoutDuration = feedbackQueue.length > 0 ? 1200 : 1200;
      const timer = setTimeout(() => {
        setIsVisible(false);
        setFeedbackQueue((prevQueue) => prevQueue.slice(1));
      }, timeoutDuration);

      return () => clearTimeout(timer);
  }, [isVisible]);

  const ui = {
    showSuccess(msg = "") {
      setFeedbackQueue((prevQueue) => [
        ...prevQueue,
        { show: true, msg: msg || "Success", type: "success" },
      ]);
    },
    showError(msg = "") {
      setFeedbackQueue((prevQueue) => [
        ...prevQueue,
        { show: true, msg: msg || "Error", type: "error" },
      ]);
    },
    showLoading(msg = "") {
      setFeedbackQueue((prevQueue) => [
        ...prevQueue,
        { show: true, msg: msg || "Loading...", type: "info" },
      ]);
    },
    closeAlert() {
      setIsVisible(false);
      setFeedback({
        show: false,
        msg: "",
        type: "",
      });
    },
  };

  const isLoggedIn = !!user;

  const authCtx = {
    user,
    isLoading,
    isLoggedIn,
    feedback,
    ui,
    isVisible,
    setIsVisible,
    setIsLoading,
    feedbackQueue,
    setFeedbackQueue
  };

  return (
    <AuthContext.Provider value={authCtx}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;

export function useAuthCtx() {
  return useContext(AuthContext);
}
AuthProvider.propTypes = {
  children: PropTypes.node,
};
