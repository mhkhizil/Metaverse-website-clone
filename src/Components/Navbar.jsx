import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { BiCaretDown } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
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
        <div className="lg:w-[40rem] flex items-center lg:justify-between">
          <nav className="hidden lg:w-[20rem] 2xl:w-[30rem] lg:flex gap-4 ">
            <ul className="w-full uppercase flex justify-evenly gap-4 font-regular">
              <li>
                <Link to={"/solution"}>Solutions</Link>
              </li>
              <li>
                <Link to={"contactus"}>Contact Us</Link>
              </li>
              <li>
                <Link to={"blog/page/1"}>Blog</Link>
              </li>
            </ul>
          </nav>
          <div className="w-56 flex justify-between items-center lg:justify-between gap-4">
            <button
              onClick={toggleMenu}
              id="menuBtn"
              className="lg:hidden text-4xl"
            >
              <HiMenu />
            </button>
            <button className="border border-black rounded-full ml-5 px-6 py-1 hover:bg-black hover:text-gray-100 font-semibold">
              <Link to={"/login"}>Login</Link>
            </button>

            <div className="hidden lg:inline-block relative">
              <button
                type="button"
                className="inline-flex relative items-center px-2 py-1 rounded-md text-sm font-medium text-gray-700 bg-white"
                onMouseEnter={toggleDropdown}
              >
                <img
                  className="w-5 h-5"
                  src="https://static.pandamr.com/assets/images/flags64/en-us.svg?v=1666005141"
                  alt=""
                />

                <div className=" inset-y-0 -right-5 flex items-center px-2 pointer-events-none">
                  <BiCaretDown />
                </div>
              </button>
              {isOpen && (
                <div
                  onMouseLeave={toggleDropdown}
                  className="origin-top-right absolute right-0  w-16 rounded bg-white"
                >
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <a
                      href="#"
                      className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      role="menuitem"
                    >
                      <img
                        className="w-5 h-5"
                        src="https://static.pandamr.com/assets/images/flags64/hy-am.svg?v=1666005141"
                        alt=""
                      />
                    </a>
                    <a
                      href="#"
                      className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      role="menuitem"
                    >
                      <img
                        className="w-5 h-5"
                        src="https://static.pandamr.com/assets/images/flags64/ru-ru.svg?v=1666005141"
                        alt=""
                      />
                    </a>
                    <a
                      href="#"
                      className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      role="menuitem"
                    >
                      <img
                        className="w-5 h-5"
                        src="https://static.pandamr.com/assets/images/flags64/tr-tr.svg?v=1666005141"
                        alt=""
                      />
                    </a>
                    <a
                      href="#"
                      className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      role="menuitem"
                    >
                      <img
                        className="w-5 h-5"
                        src="https://static.pandamr.com/assets/images/flags64/ar.svg?v=1666005141"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section
        id="mobileMenu"
        className="absolute top-0 bg-gray-200 w-full text-xl  flex-col justify-center origin-top animate-open-menu hidden z-10"
      >
        <button onClick={toggleMenu} className="text-6xl self-end px-6">
          &times;
        </button>
        <nav
          className="flex flex-col min-h-screen items-center py-8"
          aria-label="mobile"
        >
          <Link to={"/"}>
            <h4
              onClick={toggleMenu}
              className="w-full text-center py-6 hover:opacity-90"
            >
              Home
            </h4>
          </Link>
          <Link to={"/solution"}>
            <h4
              onClick={toggleMenu}
              className="w-full text-center py-6 hover:opacity-90"
            >
              Solutions
            </h4>
          </Link>
          <Link to={"/contactus"}>
            <h4
              onClick={toggleMenu}
              className="w-full text-center py-6 hover:opacity-90"
            >
              Contact us
            </h4>
          </Link>
          <Link to={"/blog/page/1"}>
            <h4
              onClick={toggleMenu}
              className="w-full text-center py-6 hover:opacity-90"
            >
              Blog
            </h4>
          </Link>
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
