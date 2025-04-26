import { Linkedin, Mail, Phone } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <div className="w-full p-12 flex flex-col md:flex-row gap-8 border-t-2 border-slate-700 bg-slate-950 text-slate-50">
      <div className="md:w-1/3 flex flex-col">
        <h1 className="text-3xl font-bold">StayEase</h1>
        <h1 className="text-2xl font-medium font-serif mt-4">
          Leading the way in adventure, <br />
          join our community
        </h1>
      </div>

      <div className="md:w-1/3">
        <h1 className="text-2xl font-semibold mb-4">Product</h1>
        <h2 className="mb-2 cursor-pointer hover:underline">
          ➡️ Upcoming Trips
        </h2>
        <h2 className="mb-2 cursor-pointer hover:underline">➡️ About Us</h2>
        <h2 className="mb-2 cursor-pointer hover:underline">➡️ Reviews</h2>
      </div>

      <div className="md:w-1/3">
        <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>

        <a
          href="mailto:niladrimodakk2001@gmail.com"
          className="flex items-center gap-2 mb-2 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail />
          <span>niladrimodakk2001@gmail.com</span>
        </a>

        <div className="flex items-center gap-2 mb-2">
          <Phone />
          <span>+91 6291508144</span>
        </div>

        <a
          href="https://www.linkedin.com/in/niladri-modak-16a99824b/"
          className="flex items-center gap-2 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
          <span>Niladri Modak</span>
        </a>
      </div>
    </div>
  );
}

export default Footer;
