import React from "react";
import { Link } from "react-router-dom";
import { LiaUserTieSolid, LiaUser } from "react-icons/lia";
import bannerImg from "../Images/banner.png";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-[-35px] bg-beige] relative">
      <img
        src={bannerImg}
        alt="Transistor Blockchain Crypto"
        className="w-70 h-60 md:w-70 md:h-60 max-w-full max-h-full mb-[-16px]"
      />

      <h1 className="text-4xl border-4 p-4 rounded-xl border-batman font-poppins mb-4 text-batman">
        WEB3 NEWSLETTER APP
      </h1>
      <div className="flex space-x-8">
        <Link
          to="/Admin"
          target="_blank"
          rel="noopener noreferrer"
          className="w-28 h-28  border-4 border-batman bg-transparent hover:bg-[#29fd16] flex flex-col items-center justify-center rounded-3xl shadow-lg transition-colors duration-200"
        >
          <LiaUserTieSolid size={"3em"} color="#3d3d3d" style={{}} />
          <span className="font-poppins text-batman text-xl">ADMIN</span>
        </Link>
        <Link
          to="/Subscribe"
          target="_blank"
          rel="noopener noreferrer"
          className="w-28 h-28 border-4 border-batman bg-transparent hover:bg-[#f7960f] text-white flex flex-col items-center justify-center rounded-3xl shadow-lg transition-colors duration-200"
        >
          <LiaUser size={"3em"} color="#3d3d3d" style={{}} />
          <span className=" font-poppins text-batman text-xl">USER</span>
        </Link>
      </div>
      <footer className="absolute bottom-0 right-0 mr-4 mb-1 flex flex-col items-center">
        <img
          src="https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/y0i0xbrkrvs9ntqqbzc5"
          alt="Mailchain Logo"
          className="w-24 h-24"
        />
        <p className="text-sm mt-[-25px] text-gray-500">
          Powered by <strong>Mailchain</strong>{" "}
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
