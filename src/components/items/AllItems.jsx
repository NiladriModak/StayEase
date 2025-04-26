import React from "react";
import ItemCard from "./ItemCard";
import Slider from "react-slick";

function AllItems() {
  const allPlans = [
    {
      name: "Goa Beach Resort",
      duration: "5 days/4 nights",
      rate: "7999",
      image: "/goa.jpg",
    },
    {
      name: "Andaman Adventure Resort",
      duration: "6 days/5 nights",
      rate: "12999",
      image: "/andaman.jpg",
    },
    {
      name: "Kerala Backwaters Resort",
      duration: "4 days/3 nights",
      rate: "6999",
      image: "/kerala.jpg",
    },
    {
      name: "Lakshadweep Islands Resort",
      duration: "7 days/6 nights",
      rate: "15999",
      image: "/lakshadweep.jpg",
    },
    {
      name: "Shimla and Kufri Resort",
      duration: "5 days/4 nights",
      rate: "8999",
      image: "/shimla.jpg",
    },
    {
      name: "Kerala Backwaters Resort",
      duration: "4 days/3 nights",
      rate: "6999",
      image: "/kerala.jpg",
    },
    {
      name: "Lakshadweep Islands Resort",
      duration: "7 days/6 nights",
      rate: "15999",
      image: "/lakshadweep.jpg",
    },
    {
      name: "Shimla and Kufri Resort",
      duration: "5 days/4 nights",
      rate: "8999",
      image: "/shimla.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280, // less than xl
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 1024, // less than lg
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 640, // small screens like mobile
        settings: {
          slidesToShow: 1,
          centerMode: false, // remove centering in small screens
        },
      },
    ],
  };

  return (
    <div className="px-4 md:px-12 py-8">
      <p className="text-lg md:text-2xl font-semibold mb-2">
        Upcoming memories for you
      </p>
      <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-t from-sky-500 to-indigo-500 bg-clip-text text-transparent mb-6">
        Begin your unforgettable adventures with us
      </h1>
      <div className="w-full flex justify-center items-center">
        <Slider className="w-full md:w-11/12" {...settings}>
          {allPlans.map((ele, index) => (
            <div key={index} className="px-2">
              <ItemCard ele={ele} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default AllItems;
