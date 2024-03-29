import React from "react";
import RegisterForm from "../components/forms/RegisterForm";
import { useItemsCtx } from "../context/ItemsContextProvider";
import { useAuthCtx } from "../context/AuthProvider";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

function RegisterPage() {
  const { navigate } = useItemsCtx();
  const { setIsLoading, ui } = useAuthCtx();
  function registerToShop({ email, password }) {
    ui.showLoading();
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsLoading(false);
        ui.showSuccess("User has been successfully registered");
        navigate("/clothes");
      })
      .catch((error) => {
        ui.showError("Registration failed");
        setIsLoading(false);
      });
  }
  return (
    <div className="container items-center gap-32 flex flex-col lg:min-h-[71rem]">
      <h1 className="text-4xl mt-40 font-bold lg:text-6xl">Registration</h1>
      <RegisterForm onRegister={registerToShop} />
      <div className="text-center">
        <p className="text-3xl lg:text-4xl">Already have an account ?</p>
        <Link
          className="font-bold text-3xl mt-4 hover:underline block lg:text-5xl"
          to={"/login"}
        >
          {" "}
          <span>Click here to login</span>{" "}
        </Link>
      </div>
    </div>
  );
}

export default RegisterPage;
