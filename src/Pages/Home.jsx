import React from "react";

import { TiTick } from "react-icons/ti";

import {
  BsDiscord,
  BsTwitter,
  BsInstagram,
  BsYoutube,
  BsLinkedin,
  BsFacebook,
  BsPlayCircleFill,
} from "react-icons/bs";

import { FaTelegramPlane } from "react-icons/fa";

const Home = () => {
  return (
    <div className=" mt-16 h-screen">
      <div className=" flex items-center justify-center">
        <div className=" flex-col  items-center justify-center  w-4/5  ">
          <p className=" text-center font-mainf text-5xl lin tracking-wide ">
            THE ULTIMATE METAVERSE
          </p>
          <p className=" text-center font-mainf text-5xl tracking-wide mt-6  mb-2">
            FOR BUSINESSES
          </p>
          <p className=" text-center text-3xl text-gray-700 tracking-wider">
            Your metaverse development company
          </p>
          <img
            src="https://static.pandamr.com/fs/userFiles/pandamrv2/images/3349-3349-1234-min-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-16667919813762.webp"
            alt=""
          />
          <div className=" text-center ">
            <button className="  hover:bg-hbg text-center bg-pg  rounded-large mt-10  px-20 py-3">
              <span className="">Let's talk</span>{" "}
            </button>
          </div>
          <p className="text-center font-mainf text-3xl mt-16 lin tracking-wide">
            UNLIMITED OPPORTUNITIES IN THE METAVERSE
          </p>
          <p className=" text-center text-xl mt-10 text-gray-700 tracking-wider">
            We guide businesses toward creating value in the digital space.
            Explore the benefits of expanding your industry into 3D
          </p>
        </div>
      </div>
      <div className=" bg-black ">
        <div className="  mt-40 flex justify-center items-center">
          <div className=" ">
            <div className="m-9">
              <p className="  text-center text-white text-4xl font-extrabold">
                Business
              </p>
            </div>
            <div className="px-2 py-16 m-7 h-[350px] rounded-large   bg-blackistgrey">
              <div>
                <p className=" text-white">
                  <TiTick className=" inline   text-lime-600 text-4xl" />
                  &nbsp; Virtual 3D offices and spaces for your corporate
                  presence in the metaverse to lead innovation in your industry.
                </p>
                <p className=" text-white mt-6 mb-6">
                  <TiTick className=" inline   text-lime-600 text-4xl" />
                  &nbsp; Step-by-step guidance guaranteed for you to adapt to
                  the Metaverse environment under your business model.
                </p>
                <p className=" text-white">
                  <TiTick className=" inline   text-lime-600 text-4xl" />
                  &nbsp; Unique functionality and features for your business
                  needs.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="m-9">
              <p className=" text-center text-white text-4xl font-extrabold">
                Education
              </p>
            </div>
            <div className="  m-7 h-[350px] px-2 py-16  rounded-large bg-blackistgrey">
              <div className="">
                <p className="  text-white">
                  <TiTick className=" inline   text-lime-600 text-4xl" /> &nbsp;
                  Transfer online learning sessions into an immersive 3D
                  environment. Engage students and educators with various
                  virtual tools.
                </p>
                <p className=" mt-6 mb-6 text-white">
                  <TiTick className=" inline   text-lime-600 text-4xl" />
                  &nbsp; Full class immersion using virtual classrooms, lecture
                  halls, and other spaces for comfortable learning.
                </p>
                <p className=" text-white">
                  <TiTick className=" inline   text-lime-600 text-4xl" />
                  &nbsp; Tools for teachers and instrucors to manage the class
                  effectively in virtual spaces created specifically for
                  learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="  my-14 ">
        <div className="flex items-center justify-center ">
          <div className=" flex-col  items-center justify-center  w-4/5  ">
            <p className=" text-center font-mainf text-3xl font-extrabold lin tracking-wide ">
              Explore the Meta-spaces created by professionals for our business
              community
            </p>
            <div className=" my-10">
              <img
                src="https://static.pandamr.com/fs/userFiles/pandamrv2/images/3514-l-2-2-16668542124443.webp"
                alt=""
              />
            </div>
            <div className=" gap-10  flex items-center justify-center">
              <div>
                <img
                  className=" w-auto h-auto "
                  src="https://static.pandamr.com/fs/userFiles/pandamrv2/images/3486-layer-3-1-16733374833653.webp?v=1673338488"
                  alt=""
                />
              </div>
              <div>
                <img
                  className=" w-auto h-auto "
                  src="https://static.pandamr.com/fs/userFiles/pandamrv2/images/3486-layer-4-2.webp?v=1673338488"
                  alt=""
                />
              </div>
              <div>
                <img
                  className=" w-auto h-auto "
                  src="https://static.pandamr.com/fs/userFiles/pandamrv2/images/3486-layer-2-3.webp?v=1673338488"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex-col items-center justify-center bg-black  ">
        <div className=" pt-8  ">
          <div className=" text-center text-gray-50 font-extrabold text-5xl">
            METACOMMUNITY
          </div>
          <div className=" text-xl text-center text-gray-50  tracking-widest my-4">
            Join our community built around so many bright minds
          </div>
          <div className="py-8 gap-36 flex items-center justify-center text-gray-50">
            <BsDiscord className=" text-5xl" />
            <BsTwitter className=" text-5xl" />
            <FaTelegramPlane className=" text-5xl" />
            <BsInstagram className=" text-5xl" />
            <BsYoutube className=" text-5xl" />
            <BsLinkedin className=" text-5xl" />
            <BsFacebook className=" text-5xl" />
          </div>
        </div>
      </div>
      <div className=" mt-10 flex items-center justify-center">
        <div className=" flex  gap-28 items-center justify-center  w-4/5  ">
          <div className=" w-2/4">
            <div>
              <p className="  text-lg font-light">
                Before you jump into corporate meta-spaces, think of your
                virtual self in the metaverse: your Avatar.
              </p>
              <p className=" my-6 text-3xl  font-thin">Create one first!</p>
              <p className="  text-lg font-light">
                Modify every aspect of the avatar and design a fully individual
                and realistic representation of yourself.
              </p>
            </div>
            <div>
              <button className=" hover:border-none  border border-pg  border-solid  border-2 bg-pg  mt-8 rounded-large px-20 py-4 bg">
                Create an avatar
              </button>
            </div>
          </div>
          <div className=" w-2/4">
            <div className="relative">
              <img
                src="https://static.pandamr.com/fs/userFiles/pandamrv2/images/0014007853502-artboard-1-16651470897565.webp"
                alt="Image"
                className="w-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <BsPlayCircleFill className="h-16 w-16 text-white   opacity-70" />
              </div>
            </div>
          </div>
        </div>
      

      </div>
      <div className="  mt-20 flex  gap-28 items-center justify-center  " >
          <p className=" text-center font-mainf text-5xl lin tracking-wide ">THESE PEOPLE ARE IN!</p>
          </div>
    </div>
  );
};

export default Home;
