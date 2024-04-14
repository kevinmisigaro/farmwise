"use client";

import { inter, mali } from "@/utils/fonts";
import { handleClickScroll } from "@/utils/functions";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();

  return (
    <div className="navbar bg-[black] text-white">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
          >
            <li>
              <a href={"/"}>Home</a>
            </li>

            <li>
              <Link href={"/about"}>About</Link>
            </li>

            <li>
              <a
                onClick={() => {
                  if (window.location.pathname.includes("about")) {
                    router.push("/");
                  }
                  handleClickScroll("services");
                }}
              >
                Services
              </a>
            </li>
          </ul>
        </div>
        <a
          className="btn btn-ghost flex flex-row gap-x-3 items-center text-xl"
          href="/"
        >
          <img src="/assets/images/farmwiselogo.png" className="w-10" />{" "}
          <div
            className={`${inter.className} font-bold text-md text-[#277f3b]`}
          >
            Farmwise
          </div>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href={"/"} className={`${mali.className}`}>
              Home
            </a>
          </li>

          <li>
            <Link href={"/about"} className={`${mali.className}`}>
              About
            </Link>
          </li>

          <li>
            <a
              onClick={() => {
                if (window.location.pathname.includes("about")) {
                  router.push("/");
                }
                handleClickScroll("services");
              }}
            >
              Services
            </a>
          </li>

          <li>
            <a
              onClick={() => {
                if (window.location.pathname.includes("about")) {
                  router.push("/");
                }
                handleClickScroll("works");
              }}
            >
              How it Works
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
