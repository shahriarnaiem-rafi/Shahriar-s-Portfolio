import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navLink = (
    <>
      <li>
        <NavLink to="/" className="text-white ">
          Home
        </NavLink>
      </li>
      {/* <li>
        <details>
          <summary className="text-white ">Projects</summary>
          <ul className="p-2">
            <li>
              {/* Use anchor tag for external link instead of NavLink */}
      {/* <a
                className="text-black"
                href="https://shahriarnaiem-rafi.github.io/Yammi-Foods"
                target="_blank"
                rel="noopener noreferrer"
              >
                Projects 1
              </a>
            </li>
            <li> */}
      {/* Use anchor tag for external link instead of NavLink */}
      {/* <a
                className="text-black"
                href="https://shahriarnaiem-rafi.github.io/Donation-for-Flood"
                target="_blank"
                rel="noopener noreferrer"
              >
                Projects 2
              </a>
            </li>
          </ul>
        </details>
      </li> */}
      <li>
        <NavLink to="/projects" className="text-white ">
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="text-white ">
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink to="/aboutme" className="text-white ">
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 fixed fixed-top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/" className=" ">
                  Home
                </NavLink>
              </li>
              <li>
                <details>
                  <summary className=" ">Projects</summary>
                  <ul className="p-2">
                    <li>
                      <a
                        className="text-black"
                        href="https://shahriarnaiem-rafi.github.io/Yammi-Foods"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Projects 1
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-black"
                        href="https://shahriarnaiem-rafi.github.io/Donation-for-Flood"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Projects 2
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <NavLink to="/contact" className=" ">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/aboutme" className=" ">
                  About Me
                </NavLink>
              </li>
            </ul>
          </div>
          <a
            href="/"
            className="text-2xl md:text-2xl lg:text-4xl font-extrabold tracking-widest uppercase hover:opacity-90 transition duration-300"
            style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300 }}
          >
            <span className="text-white">SHAH</span>
            <span className="text-orange-500">RIAR</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <a
            target="_blank"
            className="btn  my-btn"
            href="https://drive.google.com/file/d/1pNLJCq0xVTyraI6342Bf_dhEuVFFPGEy/view?usp=sharing"
          >
            Download CV
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
