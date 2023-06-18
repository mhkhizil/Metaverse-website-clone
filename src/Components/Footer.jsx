import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-black py-10 mt-10">
      <div className="grid md:grid-cols-4 md:grid-rows-1 grid-cols-1 grid-row-4 container mx-auto px-10 text-[#fafafa] ">
        <div className="md:col-start-1 md:col-end-2 col-start-1 col-end-2 ">
          <img
            src="https://static.pandamr.com/fs/userFiles/pandamrv2/images/2513-frame-427321994.png?v=1664179718"
            alt=""
          />
          <p className="text-[15px] font-para font-light w-[80%] mt-5 leading-4">
            PandaMR is a metaverse designed for the needs of businesses and
            communities with immersive 3D virtual solutions optimized for
            companies, educational entities, arts and entertainment industries.
          </p>
        </div>
        <div className="md:col-start-2 md:col-end-3  col-start-1 col-end-2">
          <h4 className="font-header font-semibold mb-12 text-2xl ">support</h4>
          <p className="capitalize text-[1.1rem] mb-2 font-para font-medium">
            contact us
          </p>
          <p className="capitalize text-[1.1rem] font-para font-medium">FAQ</p>
        </div>
        <div className="md:col-start-3 md:col-end-4 col-start-1 col-end-2">
          <h4 className="font-header font-semibold mb-12 text-2xl ">
            resources
          </h4>
          <p className="capitalize text-[1.1rem]  font-para font-medium">
            blog
          </p>
          <p className="capitalize text-[1.1rem] my-2 font-para font-medium">
            careers
          </p>
          <p className="capitalize text-[1.1rem]  font-para font-medium">
            case studies
          </p>
        </div>
        <div className="md:col-start-4 md:col-end-5 col-start-1 col-end-2">
          <h4 className="font-header font-semibold mb-12 text-2xl ">legal</h4>
          <p className="capitalize text-[1.1rem]  font-para font-medium">
            privacy policy
          </p>
          <p className="capitalize text-[1.1rem] my-2 font-para font-medium">
            terms and conditions
          </p>
          <p className="capitalize text-[1.1rem]  font-para font-medium">
            cookies policy
          </p>
        </div>
      </div>
      <div className="w-full container mx-auto mt-10 col-start-1 col-end-2">
        <div className="flex items-center justify-center gap-8">
          <FaFacebookF className="text-[#fafafa] text-xl" />
          <BsTwitter className="text-[#fafafa]  text-xl" />
          <FaLinkedinIn className="text-[#fafafa]  text-xl" />
          <BsInstagram className="text-[#fafafa]  text-xl" />
          <BsYoutube className="text-[#fafafa]  text-xl" />
          <FaTelegramPlane className="text-[#fafafa]  text-xl" />
          <BsDiscord className="text-[#fafafa]  text-xl" />
        </div>
        <p className="text-[.85rem] mt-5 font-para font-semibold text-[#fafafa] text-center">
          Copyright PandaMR 2023. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
