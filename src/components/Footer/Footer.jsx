import { Linkedin, Mail, MessageCircleCode, Phone } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full p-12 flex flex-wrap border-2 gap-8 border-slate-950 bg-slate-950 text-slate-50">
      <div className="w-1/3  flex flex-wrap flex-col ">
        <h1 className="text-3xl font-bold">StayEase</h1>
        <h1 className="text-2xl font-medium font-serif">
          Leading the way in adventure, <br />
          join our community
        </h1>
      </div>
      <div className="w-1/3">
        <h1 className="text-2xl font-semibold mb-2">Product</h1>
        <h2 className="mb-2">➡️Upcoming Trips</h2>
        <h2 className="mb-2">➡️About us</h2>
        <h2 className="mb-2">➡️Reviews</h2>
      </div>
      <div className="">
        <h1 className="text-2xl font-semibold mb-2">Contact Us</h1>
        <Link
          to={"http://www.niladrimodakk2001@gmail.com"}
          className="flex gap-2 mb-2"
        >
          <Mail /> niladrimodakk2001@gmail.com
        </Link>
        <h2 className="flex gap-2 mb-2">
          <Phone />
          <span>+91 6291508144</span>
        </h2>
        <Link
          to={"http://www.linkedin.com/in/niladri-modak-16a99824b/"}
          className="flex gap-2"
        >
          <Linkedin />
          <span>Niladri Modak</span>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
