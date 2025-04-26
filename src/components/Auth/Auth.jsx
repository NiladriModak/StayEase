import React, { useState } from "react";
import carousel from "../../assets/carousel.jpg";
import Footer from "../Footer/Footer";
import SignUpPage from "./SignUpPage";
import SignInPage from "./SignInPage";
function Auth() {
  const [option, setOption] = useState("signup");
  return (
    <div className="w-full flex flex-col ">
      <div className="w-full h-[100vh]">
        <img src={carousel} className="w-full h-full object-cover" />
      </div>

      <div className="absolute  bg-black/30  w-1/3 z-10 transform -translate-x-1/2  -translate-y-1/2 text-2xl flex flex-col gap-8 text-slate-100 top-1/2 left-1/2 backdrop-blur-2xl rounded-2xl py-4">
        <div className="relative w-full">
          <div className="w-full flex  pb-3">
            <h2
              className="cursor-pointer w-1/2 text-center"
              onClick={() => setOption("signup")}
            >
              Sign Up
            </h2>

            <h2
              className="cursor-pointer w-1/2 text-center"
              onClick={() => setOption("signin")}
            >
              Sign In
            </h2>
          </div>

          {console.log("opttion-", option)}
          <div
            className={`absolute bottom-0 h-1 bg-slate-50 transition-all duration-300 rounded-2xl `}
            style={{
              width: "50%",
              left: option === "signup" ? "0%" : "50%",
            }}
          />
        </div>
        <div>{option === "signup" ? <SignUpPage /> : <SignInPage />}</div>
      </div>

      <Footer />
    </div>
  );
}

export default Auth;
