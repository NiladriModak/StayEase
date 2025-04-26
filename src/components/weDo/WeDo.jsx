import React from "react";
import wedo from "../../assets/wedo.jpg";
import mountain from "../../assets/mountain.jpg";
import southIndia from "../../assets/southIndia.jpg";

function WeDo() {
  const mountains = [
    "Himalayas (North India — Jammu & Kashmir, Himachal, Uttarakhand, Sikkim, Arunachal)",
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
    <div className="w-full px-4 md:px-12 py-12 flex flex-col justify-center">
      <div className="w-full mb-8 text-center">
        <h2 className="text-xl md:text-3xl font-semibold mb-2">
          We provide the best stays and at perfect locations
        </h2>
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-t from-sky-500 to-indigo-500 bg-clip-text text-transparent">
          Our Travel Stays Are At Every Corner Of India
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center shadow-2xl shadow-slate-400 rounded-2xl p-6 gap-6 mb-12">
        <div className="flex-1 flex flex-col gap-4">
          <span className="text-2xl md:text-4xl font-semibold text-slate-950 font-mono">
            01. Amidst Mountains and Hills of India
          </span>
          <ul className="text-base md:text-lg flex flex-col gap-2 text-slate-600">
            {mountains.map((ele, index) => (
              <li key={index}>✈️ {ele}</li>
            ))}
          </ul>
        </div>
        <div className="flex-1 relative w-full">
          <img
            className="h-72 md:h-full w-full rounded-2xl object-cover"
            src={mountain}
            alt="Mountains"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity rounded-2xl duration-300 flex items-center justify-center">
            <p className="text-white text-xl md:text-2xl font-mono">
              Hills and Mountains of India
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center rounded-2xl p-6 gap-6 mb-12">
        <div className="flex-1 relative w-full">
          <img
            className="h-72 md:h-full w-full rounded-2xl object-cover"
            src={wedo}
            alt="North India"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity rounded-2xl duration-300 flex items-center justify-center">
            <p className="text-white text-xl md:text-2xl font-mono">
              North India
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <span className="text-2xl md:text-4xl font-semibold text-slate-950 font-mono">
            02. In North India's Heritage & Culture
          </span>
          <ul className="text-base md:text-lg flex flex-col gap-2 text-slate-600">
            {northInd.map((ele, index) => (
              <li key={index}>✈️ {ele}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center shadow-2xl shadow-slate-400 rounded-2xl p-6 gap-6">
        <div className="flex-1 flex flex-col gap-4">
          <span className="text-2xl md:text-4xl font-semibold text-slate-950 font-mono">
            03. Throughout The South India's Greenery
          </span>
          <ul className="text-base md:text-lg flex flex-col gap-2 text-slate-600">
            {southInd.map((ele, index) => (
              <li key={index}>✈️ {ele}</li>
            ))}
          </ul>
        </div>
        <div className="flex-1 relative w-full">
          <img
            className="h-72 md:h-full w-full rounded-2xl object-cover"
            src={southIndia}
            alt="South India"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity rounded-2xl duration-300 flex items-center justify-center">
            <p className="text-white text-xl md:text-2xl font-mono">
              South India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeDo;
