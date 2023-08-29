import { useEffect, useState, useContext, createContext } from "react";
import PropTypes from "prop-types";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

const AuthContext = createContext({
  user: {},
  token: {},
  isLoggedIn: false,
  isLoading: false,
  feedback: {
    show: false,
    message: "",
    type: "",
  },
  ui: {},
});

AuthContext.displayName = "Authentification";

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
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

  const { show, msg } = feedback;
  useEffect(() => {
    if (show === true && msg !== "Loading") {
      setIsVisible(true);
      setTimeout(() => {
        setFeedback({
          show: false,
          msg: "",
          type: "",
        });
      }, 1500);
    }
  }, [show, msg]);

  const ui = {
    showSuccess(msg = "") {
      setFeedback({
        show: true,
        msg: msg || "Success",
        type: "success",
      });
    },
    showError(msg = "") {
      setFeedback({
        show: true,
        msg: msg || "Error",
        type: "error",
      });
    },
    showLoading(msg = "") {
      setFeedback({
        show: true,
        msg: msg || "Loading...",
        type: "info",
      });
    },
    closeAlert() {
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
