import React from "react";
import plan from "../../assets/planEasy.jpeg";
function PlanEasy() {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="lg:w-1/3 w-11/12">
        <img src={plan} alt="Plan" />
      </div>
      <div className="w-full md:w-2/3">
        <h1 className="lg:text-5xl text-3xl text-center font-mono font-bold p-4 mt-8">
          Book easy, Pay less & <br />
          Experience more
        </h1>
        <div className="flex flex-wrap gap-16 mt-10 justify-center items-center">
          <div className="p-8 text-xl font-bold shadow-2xl shadow-blue-200 rounded-3xl ">
            173+ <br />
            <span className="font-light">
              Satisfied
              <br /> Customers
            </span>
          </div>
          <div className="p-8 text-xl font-bold shadow-2xl shadow-blue-200 rounded-3xl ">
            10+ <br />
            <span className="font-light">
              Global
              <br /> Destinations
            </span>
          </div>
          <div className="p-8 text-xl font-bold shadow-2xl shadow-blue-200 rounded-3xl ">
            24/7 <br />
            <span className="font-light">
              Customer
              <br /> Support
            </span>
          </div>
          <div className="p-8 text-xl font-bold shadow-2xl shadow-blue-200 rounded-3xl ">
            100% <br />
            <span className="font-light">
              Dediacted
              <br /> Work
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanEasy;
