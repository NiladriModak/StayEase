import React, { useEffect, useState } from "react";
import carousel from "../assets/carousel.jpg";
import AllItems from "./items/AllItems";
import Footer from "./Footer/Footer";
import auth from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import WeDo from "./weDo/WeDo";
import PlanEasy from "./PlanEasy/PlanEasy";
import { ArrowRight, Menu } from "lucide-react"; // Menu Icon
import { Button } from "@mui/material";

function Hero() {
  const navigator = useNavigate();
  const [showMenu, setShowMenu] = useState(false); // for mobile

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigator("/auth");
    } catch (err) {
      console.log("error", err);
    }
  };

  const headings = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Blogs", link: "/" },
  ];

  useEffect(() => {}, [auth, auth.currentUser]);

  return (
    <div className="w-full p-0 m-0 flex flex-col">
      <div className="w-full h-[100vh] relative">
        <img src={carousel} className="w-full h-full object-cover" />

        {/* Navbar */}
        <div className="absolute z-10 text-2xl flex gap-8 text-slate-100 bg-black/30 top-9 right-12 backdrop-blur-2xl rounded-2xl p-4 items-center">
          {/* Large screens - show links */}
          <div className="hidden lg:flex gap-8 items-center">
            {headings.map((ele) => (
              <h1
                className="cursor-pointer hover:-translate-y-1 hover:duration-300"
                key={ele.name}
              >
                {ele.name}
              </h1>
            ))}
            {!auth || auth?.currentUser == null ? (
              <Link
                to="/auth"
                className="cursor-pointer hover:-translate-y-1 hover:duration-300"
              >
                Login/SignUp
              </Link>
            ) : (
              <>
                <h1
                  onClick={() => navigator("/mybookings")}
                  className="cursor-pointer hover:-translate-y-1 hover:duration-300"
                >
                  My Bookings
                </h1>
                <h1
                  onClick={handleLogout}
                  className="cursor-pointer hover:-translate-y-1 hover:duration-300"
                >
                  Log out
                </h1>
              </>
            )}
          </div>

          {/* Mobile - show menu button */}
          <div className="flex lg:hidden">
            <Menu
              size={32}
              className="cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {showMenu && (
          <div className="absolute top-24 right-12 bg-black/80 p-4 rounded-xl flex flex-col gap-4 text-white z-20 backdrop-blur-md">
            {headings.map((ele) => (
              <Link
                to={ele.link}
                className="hover:text-gray-400"
                key={ele.name}
                onClick={() => setShowMenu(false)}
              >
                {ele.name}
              </Link>
            ))}
            {!auth || auth?.currentUser == null ? (
              <Link
                to="/auth"
                className="hover:text-gray-400"
                onClick={() => setShowMenu(false)}
              >
                Login/SignUp
              </Link>
            ) : (
              <>
                <h1
                  onClick={() => {
                    navigator("/mybookings");
                    setShowMenu(false);
                  }}
                  className="cursor-pointer hover:text-gray-400"
                >
                  My Bookings
                </h1>
                <h1
                  onClick={() => {
                    handleLogout();
                    setShowMenu(false);
                  }}
                  className="cursor-pointer hover:text-gray-400"
                >
                  Log out
                </h1>
              </>
            )}
          </div>
        )}

        {/* Left Logo */}
        <div className="absolute top-6 left-12 z-10 text-white text-2xl font-bold bg-black/30 backdrop-blur-md p-3 rounded-xl">
          StayEase
        </div>

        {/* Centered Content */}
        <div className="absolute top-1/2 left-12  z-10 transform -translate-y-1/2 text-left text-white">
          <h1 className="text-7xl font-bold mb-4">Welcome to StayEase</h1>
          <p className="text-2xl mt-5 text-slate-50 font-bold max-w-xl mx-auto">
            Life Long Memories Just A Few Days Away
          </p>
          <Button
            variant="contained"
            onClick={() => {
              window.scrollBy({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
            sx={{
              marginTop: "15px",
              backgroundColor: "black",
              fontSize: "1.1rem",
              "&:hover": {
                backgroundColor: "white",
                color: "black",
                transform: "scale(1.1)",
                transition: "transform 1s",
              },
            }}
          >
            Explore
            <span>
              <ArrowRight />
            </span>
          </Button>
        </div>
      </div>

      {/* Other Components */}
      <AllItems />
      <WeDo />
      <PlanEasy />
      <Footer />
    </div>
  );
}

export default Hero;
