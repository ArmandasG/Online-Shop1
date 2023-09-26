import React from "react";

function ThankYou() {
  return (
    <div className="flex flex-col items-center container h-screen lg:h-[71rem]">
      <div className="bg-no-repeat bg-cover w-96 h-96 bg-center bg-[url('/icons/thankYou.png')]"></div>
      <h1 className="text-center text-4xl py-4 underline">
        Thank you for trying my website project
      </h1>
      <p className="text-2xl text-center">
        I am currently a Junior FrontEnd Developer looking for opportunities.
        Please do contact me via LinkedIn and check out my Github below
      </p>
      <div className="flex gap-8 pt-8">
        <a
          className="w-8 h-8 hover:opacity-50"
          href="https://www.linkedin.com/in/armandas-genys-b4653a176/"
        >
          <i className="fa fa-linkedin-square text-5xl" aria-hidden="true"></i>
        </a>
        <a
          className="w-8 h-8 hover:opacity-50"
          href="https://github.com/ArmandasG/Online-Shop1"
        >
          <i className="fa fa-github-square text-5xl" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}

export default ThankYou;
