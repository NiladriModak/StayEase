import React from "react";
import Navbar from "./Navbar/Navbar";

function Page({ children }) {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex justify-center items-center">{children}</div>
    </div>
  );
}

export default Page;
