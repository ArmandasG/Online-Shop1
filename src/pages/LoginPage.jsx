import React from "react";
import { useItemsCtx } from "../context/ItemsContextProvider";
import { useAuthCtx } from "../context/AuthProvider";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebase";
import LoginForm from "../components/forms/LoginForm";
import { Link } from "react-router-dom";

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
  return (
    <div className="min-h-screen container items-center gap-40 flex flex-col">
        <div className="flex flex-col items-center w-full">
      <h1 className="text-4xl mt-40 font-bold">Sign in</h1>
      <LoginForm onLogin={loginShop} />
      </div>
      <div className="flex flex-col items-center w-full text-3xl">
        <div className="border border-black rounded-lg p-10 space-y-8">
          {" "}
          <h2 className="text-center font-bold">Not yet registered ?</h2>{" "}
          <p>There are benefits to having an account:</p>
          <ul>
            <li>* See your order history</li>
            <li>* No need to fill the delivery information</li>
            <li>* Future updates might provide more</li>
          </ul>
          <Link className="border w-full block text-center border-black rounded-md py-4 px-30 hover:bg-black hover:text-white" to={"/register"}>
        <span className="w-full">Create an account</span>
        </Link>
          <button onClick={loginWithGoogle} className="border w-full flex justify-center border-black rounded-md py-4 px-30 hover:text-white hover:bg-black">
        <img className="w-8 mr-2" src="/google.png" alt="googleIcon" />
        <span>Login with Google</span>
      </button>
      </div>
      
      </div>
    </div>
  )
}

export default LoginPage;
