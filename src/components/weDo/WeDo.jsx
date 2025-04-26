import React from "react";
import wedo from "../../assets/wedo.jpg";
import mountain from "../../assets/mountain.jpg";
import southIndia from "../../assets/southIndia.jpg";
function WeDo() {
  const mountains = [
    " Himalayas (North India — Jammu & Kashmir, Himachal, Uttarakhand, Sikkim, Arunachal)",

    "Vindhya Range (Central India — Madhya Pradesh, Uttar Pradesh)",

    "Aravalli Range (Rajasthan and Haryana)",

    "Satpura Range (Madhya Pradesh, Maharashtra)",
  ];
  const northInd = [
    "Jaipur (Rajasthan) – Pink City, forts, palaces, local crafts",
    "Agra (Uttar Pradesh) – Taj Mahal, Agra Fort, Mughal architecture",
    "Varanasi (Uttar Pradesh) – Ganga Aarti, temples, oldest living city",
    "Jim Corbett National Park (Uttarakhand) – Tiger safaris, rich biodiversity, bird watching",
  ];
  const southInd = [
    "Mysuru (Karnataka) – Royal heritage, Mysore Palace, Dussehra Festival",
    "Ooty (Tamil Nadu) – Queen of Hill Stations, tea gardens, toy train",
    "Alleppey (Kerala) – Backwaters, houseboats, serene village life",
    "Hampi (Karnataka) – Ancient ruins, UNESCO World Heritage Site, boulder landscapes",
  ];
  return (
    <div className="w-11/12 my-12 ml-12 flex flex-col justify-center">
      <div className="w-full mb-4">
        <h2 className="text-3xl font-semibold">
          We provide the best stays and at perfect locations
        </h2>
        <h1 className="text-5xl font-bold bg-gradient-to-t from-sky-500 to-indigo-500 bg-clip-text text-transparent">
          Our Travel Stays Are At Every Corners Of India
        </h1>
      </div>

      <div className="w-full flex flex-col h-96 md:flex-row shadow-2xl shadow-slate-400 p-4 my-10">
        <div className="h-full md:w-1/2 w-full flex flex-col gap-3 ">
          <span className="text-4xl font-medium mt-6 text-slate-950 font-mono ">
            01. Amidst Mountains and Hills of India
          </span>
          <ul className="text-lg flex flex-col gap-3 text-slate-600">
            {mountains.map((ele, index) => (
              <li className="m-1 my-2" key={index}>
                ✈️ {ele}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative md:w-1/2 w-full">
          <img
            className="h-full w-full rounded-2xl "
            src={mountain}
            alt="WeDo"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity rounded-2xl  duration-300 flex items-center justify-center">
            <p className="text-white text-2xl font-mono">
              Hills and Mountains of India
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col-reverse md:flex-row m-6  p-4 my-10">
        <div className="relative md:w-1/2 w-full">
          <img className="h-full w-full rounded-2xl " src={wedo} alt="WeDo" />
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity rounded-2xl  duration-300 flex items-center justify-center">
            <p className="text-white text-2xl font-mono">North India</p>
          </div>
        </div>
        <div className="h-full md:w-1/2 w-full flex flex-col gap-3 pl-4">
          <span className="text-4xl font-medium mt-6 text-slate-950 font-mono ">
            02. In North India's Heritage & Culture
          </span>
          <ul className="text-lg flex flex-col gap-3 text-slate-600">
            {northInd.map((ele, index) => (
              <li className="m-1 my-2" key={index}>
                ✈️ {ele}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row m-6 shadow-2xl shadow-slate-400 p-4 my-10">
        <div className="h-full md:w-1/2 w-full flex flex-col gap-3 pl-4">
          <span className="text-4xl font-medium mt-6 text-slate-950 font-mono ">
            02. Throughout The South India's Greenary
          </span>
          <ul className="text-lg flex flex-col gap-3 text-slate-600">
            {southInd.map((ele, index) => (
              <li className="m-1 my-2" key={index}>
                ✈️ {ele}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative md:w-1/2 w-full">
          <img
            className="h-full w-full rounded-2xl "
            src={southIndia}
            alt="WeDo"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity rounded-2xl  duration-300 flex items-center justify-center">
            <p className="text-white text-2xl font-mono">South India</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeDo;
