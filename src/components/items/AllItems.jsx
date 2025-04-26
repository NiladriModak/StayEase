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
    centerMode: true, // ✅ enable centering
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1500,
        settings: { slidesToShow: 2, centerMode: true },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1, centerMode: true },
      },
    ],
  };
  return (
    <div>
      <p className="text-2xl ml-12 my-4 font-semibold">
        Upcoming memories for you
      </p>
      <h1 className="text-5xl ml-12 mb-6 font-bold bg-gradient-to-t from-sky-500 to-indigo-500 bg-clip-text text-transparent">
        Begin your unforgettable adventures with us
      </h1>
      <div className="flex justify-center items-center ">
        <Slider
          className="ml-12 lg:w-11/12 md:w-xl w-11/12   mb-4 "
          {...settings}
        >
          {allPlans.map((ele) => (
            // <div className="flex justify-center px-2" key={ele.name}>
            <ItemCard ele={ele} />
            // </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default AllItems;
