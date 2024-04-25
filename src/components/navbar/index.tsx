"use client";

import { inter, mali } from "@/utils/fonts";
import { handleClickScroll } from "@/utils/functions";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="navbar bg-[black] text-white" id="nav">
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
              <Link href={"/"}>Home</Link>
            </li>

            <li>
              <a
                onClick={() => {
                  if (pathname !== "") {
                    router.push("/");
                  }
                  handleClickScroll("about");
                }}
                className={`${mali.className}`}
              >
                About
              </a>
            </li>

            <li>
              <a
                className={`${mali.className}`}
                onClick={() => {
                  if (pathname !== "") {
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
                className={`${mali.className}`}
                onClick={() => {
                  if (pathname !== "") {
                    router.push("/");
                  }
                  handleClickScroll("works");
                }}
              >
                How it Works
              </a>
            </li>
            <li>
              <Link href={"/owners"} className={`${mali.className}`}>
                Land Owners
              </Link>
            </li>

            <li>
              <Link href={"/officers"} className={`${mali.className}`}>
                Farm Officers
              </Link>
            </li>
            <li>
              <Link href={"/suppliers"} className={`${mali.className}`}>
                Suppliers
              </Link>
            </li>
            <li>
              <Link href={"/faq"} className={`${mali.className}`}>
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <Link
          className="btn btn-ghost flex flex-row gap-x-3 items-center text-xl"
          href="/"
        >
          <img src="/assets/images/farmwiselogo.png" className="w-10" />{" "}
          <div
            className={`${inter.className} font-bold text-md text-[#277f3b] hidden md:block`}
          >
            Farmwise
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className={`${mali.className}`} href={"/"}>
              Home
            </Link>
          </li>

          <li>
            <a
              onClick={() => {
                if (pathname !== "") {
                  router.push("/");
                }
                handleClickScroll("about");
              }}
              className={`${mali.className}`}
            >
              About
            </a>
          </li>

          <li>
            <a
              className={`${mali.className}`}
              onClick={() => {
                if (pathname !== "") {
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
              className={`${mali.className}`}
              onClick={() => {
                if (pathname !== "") {
                  router.push("/");
                }
                handleClickScroll("works");
              }}
            >
              How it Works
            </a>
          </li>

          <li>
            <Link href={"/owners"} className={`${mali.className}`}>
              Land Owners
            </Link>
          </li>

          <li>
            <Link href={"/officers"} className={`${mali.className}`}>
              Farm Officers
            </Link>
          </li>
          <li>
            <Link href={"/suppliers"} className={`${mali.className}`}>
              Suppliers
            </Link>
          </li>
          <li>
            <Link href={"/faq"} className={`${mali.className}`}>
              FAQ
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn" href="/contact">
          Register Interest
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
