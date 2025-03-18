import React, { useState } from "react";
import { nav } from "../constants/navLinks";
import { Link } from "react-router-dom";
import { menu, close } from "../assets";

function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex  items-center  fixed top-0 z-20  sm:px-16 px-6 bg-[#0a192f]">
      <div className="w-full flex justify-between items-center max-w-6xl mx-auto">
        <Link
          to="/"
          className="
          flex
          items-center
          gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[18px] py-4 font-bold cursor-pointer flex">
            Prageeth &nbsp;
            <span className="sm:block hidden">|Full Stack devoloper</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row ">
          {nav.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text white" : "text-secondary"
                } hover:text-white hover:bg-[#0a193e] text-[18px] block py-4 px-3 font-medium cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}> {link.name}</a>
              </li>
            );
          })}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {nav.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text white" : "text-secondary"
                    } hover:text-white text-[18px] font-medium cursor-pointer`}
                    onClick={() => {
                      setActive(link.name);
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`#${link.id}`}> {link.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
