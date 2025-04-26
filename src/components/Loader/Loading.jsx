import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
function Loading() {
  return (
    <div className="w-full h-[100vh] border-8 flex justify-center items-center bg-[url(/carousel.jpg)] bg-cover">
      <DotLottieReact
        className="w-1/2"
        src="/loadinglottie.lottie"
        loop
        autoplay
      />
    </div>
  );
}

export default Loading;
