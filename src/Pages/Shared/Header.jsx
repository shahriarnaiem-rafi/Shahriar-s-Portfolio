import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navLinkClass = ({ isActive }) =>
    `text-white transition-colors duration-300 hover:text-yellow-300 ${isActive ? "font-bold text-yellow-300" : ""
    }`;

  const navLinks = (
    <>
      <li>
        <NavLink to="/" end className={navLinkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/projects" className={navLinkClass}>
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={navLinkClass}>
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink to="/aboutme" className={navLinkClass}>
          About Me
        </NavLink>
      </li>
    </>
  );

  return (
    <header className="navbar fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg">
      {/* Left: Mobile Menu and Logo */}
      <div className="navbar-start">
        <div className="dropdown">
          <button
            type="button"
            tabIndex={0}
            aria-label="Open navigation menu"
            className="btn btn-ghost text-white lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>

          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 text-black shadow-lg"
          >
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/aboutme">About Me</NavLink>
            </li>
            <li>
              <a
                href="https://shahriarnaiem-rafi.github.io/Yammi-Foods"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yammi Foods
              </a>
            </li>
            <li>
              <a
                href="https://shahriarnaiem-rafi.github.io/Donation-for-Flood"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donation for Flood
              </a>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <NavLink
          to="/"
          aria-label="Shahriar Naiem Rafi - Home"
          className="group flex items-center gap-3"
        >
          {/* Unique Logo Mark */}
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/30 bg-white/10 text-2xl font-black italic text-white shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:rotate-6 group-hover:bg-white/20">
            S<span className="text-yellow-300">R</span>
          </span>

          {/* Brand Name */}
          <span className="flex flex-col leading-none">
            <span className="text-xl font-extrabold tracking-[0.2em] text-white transition-colors duration-300 group-hover:text-yellow-300 md:text-2xl">
              SHAHRIAR
            </span>
            <span className="mt-1 text-[9px] font-semibold tracking-[0.35em] text-white/70 md:text-[10px]">
              NAIEM RAFI
            </span>
          </span>
        </NavLink>
      </div>

      {/* Center: Desktop Navigation */}
      <nav
        aria-label="Main navigation"
        className="navbar-center hidden lg:flex"
      >
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </nav>

      {/* Right: Download CV */}
      <div className="navbar-end">
        <a
          href="https://drive.google.com/file/d/1bGcLc_4l3nRtEGIqWFIdCJ_z0N2sFIm1/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn my-btn btn-sm sm:btn-md"
        >
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;