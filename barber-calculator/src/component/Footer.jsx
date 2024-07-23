import React from "react";
import { FaInstagram, FaTiktok, FaYoutube, FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="w-full h-40 bg-black flex items-center justify-center 2xl:fixed 2xl:bottom-0 2xl:mt-0 ">
        <div className="flex flex-col space-y-6 text-center">
          <h2 className="text-white text-2xl font-semibold">Contact</h2>
          <div className="flex items-center space-x-6">
            <a
              href="https://https://youtube.com/@kingzbarbershop348?si=8YmmlGtM_vygce8V.com"
              target="_blank"
              className="text-white text-xl"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/kingz_barber/?igsh=eXhkbmUzMGViOHd6"
              target="_blank"
              className="text-white text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@kingz_barbershop?_t=8ntsB6ynHVK&_r=1"
              target="_blank"
              className="text-white text-xl"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.facebook.com/kingzbarber.id/?locale=id_ID"
              target="_blank"
              className="text-white text-xl"
            >
              <FaFacebook />
            </a>
          </div>
          <div>
            <h3 className="text-white">
              &copy; 2024 by <span className="font-bold">kingzbarber</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
