
import { motion } from "framer-motion";
import React from "react";
import Footer from './Footer'

const Soultion = () => {
  const variant = {
    open: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    closed: { opacity: 0, scale: 0, transition: { duration: 0.5 } },
  };
  const variant2 = {
    open: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    closed: { opacity: 0, scale: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className="relative px-2">
      <div className="w-full h-[90vh] ">
        <div className="pt-16 container mx-auto bmd:px-10">
          <h1 className="font- font-bold text-6xl font-extrabold font-header">
            PandaMR districts
          </h1>
          <p className="w-[90%] text-lg font-semibold mt-5 tracking-wide leading-7">
            Along with personal spaces, PandaMR offers specialized districts for
            four industries: Business, Education, Art and Entertainment. Join
            the professionals that already operate in the metaverse!
          </p>
        </div>

        <motion.div className=" grid bmd:grid-cols-2 bmd:grid-rows-1 grid-cols-1 grid-rows-2 mt-14 bmd:container bmd:mx-auto bmd:px-10 place-items-center">
          <motion.div className=" ml-[-5rem] bmd:col-start-1  bmd:col-end-2  bmd:row-start-1  bmd:row-end-2">
            <motion.img
              initial={"closed"}
              whileInView={"open"}
             viewport={{ once: true }}

              variants={variant}
              src="https://static.pandamr.com/fs/userFiles/pandamrv2/images/2260-business-16641793505197.png?v=1664180185"
              className=" block "
              alt="photo1"
            />
          </motion.div>
          <div className="  bmd:col-start-2  bmd:col-end-3  bmd:row-start-1  bmd:row-end-2">
            <h1 className="f text-3xl mb-5 font-header font-bold">
              Business Bay
            </h1>
            <p className="text-lg font-light  ">
              Exhibit your venture in the Web3 environment in virtual 3D places
              available through The Business Bay.
            </p>
            <p className="my-6 text-lg font-light ">
              Your real-world business facilities and business model will be
              transferred into the Metaverse with the help of PandaMR.
            </p>
            <p className="text-lg font-light ">
              Conduct hiring and onboarding sessions, plan internal online
              meetings, host and take part in online conferences, and more.
            </p>
            <button className="px-8 text-xl font-akiraBold mt-20 py-3 rounded-full bg-black text-white">
              Let's talk
            </button>
          </div>
        </motion.div>

        <div className="md:h-[200vh] bmd:h-[100vh] lg:h-[180vh] sm:h-[460vh] mt-10 grid bmd:grid-cols-2 bmd:grid-rows-3 grid-cols-1 grid-rows-6 gap-2 bmd:container bmd:mx-auto lg:px-10">
          <div className="bmd:col-start-1 bmd:col-end-2 bmd:row-start-1 bmd:row-end-2 col-start-1 col-end-1 row-start-1 row-end-2">
            <h1 className="font- font-bold font-semibold text-3xl font-header mb-5">
              Education Hub
            </h1>
            <p className="text-[1.1rem] w-full lg:w-[75%] sm:w-[90%] font-para font-light text-para">
              In the Education Hub, users can create classrooms, lecture halls
              and other spaces to conduct their classes with students right in
              the metaverse.
            </p>
            <p className="text-[1.1rem] w-full lg:w-[75%] font-para font-light text-para mt-5">
              The tools and features of this district are all you can need for a
              successful and engaging class to take place virtually.{" "}
            </p>
            <button className="px-8 text-xl font-akiraBold mt-10 py-3 rounded-full bg-black text-white">
              Let's talk
            </button>
          </div>
          <div className="bmd:col-start-2 bmd:col-end-3 bmd:row-start-1 bmd:row-end-2 col-start-1 col-end-1 row-start-2 row-end-3 mb-5">
            <motion.img
              initial="closed"
              whileInView="open"
             viewport={{ once: true }}

              variants={variant2}
              src="https://static.pandamr.com/fs/userFiles/pandamrv2/images/11817716778293370-education.png?v=1665039693"
              alt=""
            />
          </div>
          <div className="bmd:col-start-1 bmd:col-end-2 bmd:row-start-2 bmd:row-end-3 col-start-1 col-end-1 row-start-3 row-end-4 mb-5">
            <motion.img
              initial={"closed"}
              whileInView={"open"}
             viewport={{ once: true }}

              variants={variant}
              src="https://static.pandamr.com/fs/userFiles/pandamrv2/images/06019209583373-artislandcba9d036ea3443031685.png?v=1665039766"
              alt=""
            />
          </div>
          <div className=" bmd:col-start-2 bmd:col-end-3 bmd:row-start-2 bmd:row-end-3 col-start-1 col-end-1 row-start-4 row-end-5">
            <h1 className="font- font-bold font-semibold text-3xl font-header mb-5">
              Arts District
            </h1>
            <p className="text-[1.1rem] w-[75%] font-para font-light text-para">
              The Art district offers artists every opportunity to promote your
              creations with just a few simple steps. Virtual art galleries are
              available to the artists for their virtual and real-world art to
              be shown, sold and auctioned off.
            </p>

            <button className="px-8 text-xl font-akiraBold mt-10 py-3 rounded-full bg-black text-white">
              Let's talk
            </button>
          </div>

          <div className="bmd:col-start-1 bmd:col-end-2 bmd:row-start-3 bmd:row-end-4 col-start-1 col-end-1 row-start-5 row-end-6">
            <h1 className="font- font-bold font-semibold text-3xl font-header mb-5">
              Entertainment
            </h1>
            <p className="text-[1.1rem] w-[90%] font-para font-light text-para">
              The Entertainment district is the only place you will ever need to
              organize entertainment activities. Concerts, exclusive content
              distribution, fan gatherings, meetups, movie screen ups and
              sneak-peaks are just a few of the activities any entertainment
              professional will use in the metaverse’s virtual environment.
            </p>

            <button className="px-8 text-xl font-akiraBold mt-10 py-3 rounded-full bg-black text-white">
              Let's talk
            </button>
          </div>
          <div className="bmd:col-start-2 bmd:col-end-3 bmd:row-start-3 bmd:row-end-4 col-start-1 col-end-1 row-start-6 row-end-7 mb-5">
            <motion.img
              initial={"closed"}
              whileInView={"open"}
             viewport={{ once: true }}

              variants={variant}
              src="https://static.pandamr.com/fs/userFiles/pandamrv2/images/3376-08319209153376-enterteiment-1.webp"
              alt=""
            />
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default Soultion;
