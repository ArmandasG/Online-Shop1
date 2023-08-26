import React from "react";
import JoinUsForm from "../components/forms/JoinUsForm";

function JoinUsPage() {
  return (
    <div className="min-h-screen container">
      <img src="/icons/join_us.jpg" alt="join us" />
      <h2 className="text-center text-4xl mt-4">Join Us</h2>
      <p className="text-center p-8 text-2xl">
        We are always searching for people who would have ideas on how to
        improve and could provide us with a breeze of fresh air
      </p>
      <JoinUsForm />
    </div>
  );
}

export default JoinUsPage;
