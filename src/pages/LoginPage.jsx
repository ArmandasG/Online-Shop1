import React from "react";
import { useItemsCtx } from "../context/ItemsContextProvider";
import { useAuthCtx } from "../context/AuthProvider";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebase";

function LoginPage() {
  const { navigate } = useItemsCtx();
  const { setIsLoading, ui } = useAuthCtx();

  function loginShop({ email, password }) {
    ui.showLoading();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsLoading(false);
        navigate("/shops");
        ui.showSuccess("Logged in");
      })
      .catch((error) => {
        const errMsg = error.message;
        ui.showError(
          errMsg === "auth._getRecaptchaConfig is not a function"
            ? "Server error"
            : "Incorrect email or password"
        );
        setIsLoading(false);
      });
  }
  function loginWithGoogle() {
    ui.showLoading();
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setIsLoading(false);
        navigate("/shops");
        ui.showSuccess("Logged in");
      })
      .catch((error) => {
        ui.showError("Something went wrong");
        setIsLoading(false);
      });
  }
  return <div>LoginPage</div>;
}

export default LoginPage;
