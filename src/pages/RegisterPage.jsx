import React from 'react'
import RegisterForm from '../components/forms/RegisterForm'
import { useItemsCtx } from '../context/ItemsContextProvider';
import { useAuthCtx } from '../context/AuthProvider';
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

function RegisterPage() {
    const { navigate } = useItemsCtx()
  const { setIsLoading, ui } = useAuthCtx();
  function registerToShop({ email, password }) {
    ui.showLoading();
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsLoading(false);
        ui.showSuccess("User has been successfully registered");
        navigate('/shops')
      })
      .catch((error) => {
        ui.showError("Registration failed");
        setIsLoading(false);
      });
  }
  return (
    <div className="min-h-screen container items-center gap-32 flex flex-col">
        
      <h1 className="text-4xl mt-40 font-bold">Registration</h1>
      <RegisterForm onRegister={registerToShop} />
      <div className='text-center'>
      <p className='text-3xl'>Already have an account ?</p>
      <Link className='font-bold text-3xl mt-4 hover:underline block' to={"/login"}>
            {" "}
            <span>Click here to login</span>{" "}
          </Link>
          </div>
      
      </div>
  )
}

export default RegisterPage