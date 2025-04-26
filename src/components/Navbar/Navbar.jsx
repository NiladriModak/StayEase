import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import auth from "../../config/firebase";

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const options = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Blog", link: "/blog" },
    { name: "MyBookings", link: "/mybookings" },
  ];

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/auth");
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <nav className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 w-full h-auto md:h-[6vmax] bg-gradient-to-r from-blue-900 to-slate-800 py-4 relative">
      <div className="text-xl md:text-2xl font-bold text-white bg-black/10 backdrop-blur-md p-2 md:p-3 rounded-xl">
        StayEase
      </div>

      <div className="md:hidden absolute right-6 top-6">
        {open ? (
          <X
            size={32}
            className="text-white cursor-pointer"
            onClick={() => setOpen(false)}
          />
        ) : (
          <Menu
            size={32}
            className="text-white cursor-pointer"
            onClick={() => setOpen(true)}
          />
        )}
      </div>

      <div
        className={`flex flex-col md:flex-row gap-4 mt-6 md:mt-0 text-lg md:text-2xl text-white bg-black/10 rounded-2xl p-6 md:p-0 transition-all duration-300 ease-in-out ${
          open ? "flex" : "hidden md:flex"
        }`}
      >
        {options.map((ele, idx) => (
          <h1
            key={idx}
            onClick={() => {
              navigate(ele.link);
              setOpen(false);
            }}
            className="cursor-pointer hover:-translate-y-1 hover:duration-300 p-2 rounded-2xl text-center"
          >
            {ele.name}
          </h1>
        ))}
        <h1
          onClick={() => {
            handleLogout();
            setOpen(false);
          }}
          className="cursor-pointer hover:-translate-y-1 hover:duration-300 p-2 rounded-2xl text-center"
        >
          Log out
        </h1>
      </div>
    </nav>
  );
}

export default Navbar;
