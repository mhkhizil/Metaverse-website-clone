import React from "react";
import Navbar from "../Components/Navbar";

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
            <button className="  hover:bg-hbg text-center bg-pg  rounded-3xl mt-10  px-20 py-3">
              {" "}
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
        <div className=" m-32 flex justify-center items-center">
          <div className=" ">
            <div className="m-9">
              <p className="  text-center text-white text-5xl font-extrabold">
                Business
              </p>
            </div>
            <div className="px-2 py-16 m-7 h-[300px] rounded-large bg-slate-600">
              <div>
                <p>
                  Virtual 3D offices and spaces for your corporate presence in
                  the metaverse to lead innovation in your industry.
                </p>
                <p>
                  {" "}
                  Step-by-step guidance guaranteed for you to adapt to the
                  Metaverse environment under your business model.
                </p>
                <p>
                  Unique functionality and features for your business needs.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="m-9">
              <p className=" text-center text-white text-5xl font-extrabold">
                Education
              </p>
            </div>
            <div className=" m-7 h-[300px] px-2 py-16  rounded-large bg-slate-600">
              <div>
                <p>
                  Transfer online learning sessions into an immersive 3D
                  environment. Engage students and educators with various
                  virtual tools.
                </p>
                <p>
                  Full class immersion using virtual classrooms, lecture halls,
                  and other spaces for comfortable learning.
                </p>
                <p>
                  {" "}
                  Tools for teachers and instrucors to manage the class
                  effectively in virtual spaces created specifically for
                  learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Home;
