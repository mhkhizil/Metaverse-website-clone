import React from "react";
import { HiMenu } from "react-icons/hi";
import { BiCaretDown } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const mobileMenu = document.getElementById("mobileMenu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
  };

  return (
    <>
      <section className="w-full flex items-center justify-between sm:justify-around p-3">
        <div className="m-3">
          <Link to={"/"}>
            <img
              className=" w-20"
              src="https://static.pandamr.com/fs/userFiles/pandamrv2/images/logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="lg:w-[30rem] flex items-center lg:justify-between">
          <nav className="hidden lg:flex gap-4 ">
            <ul className="uppercase flex gap-5">
              <li>
                <Link to={"/solution"}>Solution</Link>
              </li>
              <li>
                <Link to={"contactus"}>Contact Us</Link>
              </li>
              <li>
                <Link to={"blog/page/1"}>Blog</Link>
              </li>
            </ul>
          </nav>
          <div className="w-56 flex justify-between gap-4">
            <button
              onClick={toggleMenu}
              id="menuBtn"
              className="lg:hidden text-4xl"
            >
              <HiMenu />
            </button>
            <button className="border border-black rounded-full ml-5 px-6 py-1 hover:bg-black hover:text-gray-100">
              <Link to={"/login"}>Login</Link>
            </button>

            <div className="hidden lg:inline-block relative">
              <select className="block py-2.5 px-0 w-24 text-sm bg-transparent appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                <option value="US">US</option>
                <option value="CA">UK</option>
                <option value="FR">Singapore</option>
                <option value="DE">Germany</option>
              </select>

              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <BiCaretDown />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="mobileMenu"
        className="absolute top-0 bg-gray-200 w-full text-xl  flex-col justify-center origin-top animate-open-menu hidden"
      >
        <button onClick={toggleMenu} className="text-6xl self-end px-6">
          &times;
        </button>
        <nav
          className="flex flex-col min-h-screen items-center py-8"
          aria-label="mobile"
        >
          <h4 className="w-full text-center py-6 hover:opacity-90">Home</h4>
          <h4 className="w-full text-center py-6 hover:opacity-90">
            Solutions
          </h4>
          <h4 className="w-full text-center py-6 hover:opacity-90">
            Contact us
          </h4>
          <h4 className="w-full text-center py-6 hover:opacity-90">Blog</h4>
          <div className="inline-block relative bg-gray-100 p-2 ">
            <select className="block py-2.5 px-0 w-24 text-lg bg-transparent appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
              <option value="US">US</option>
              <option value="CA">UK</option>
              <option value="FR">Singapore</option>
              <option value="DE">Germany</option>
            </select>

            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <BiCaretDown />
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
