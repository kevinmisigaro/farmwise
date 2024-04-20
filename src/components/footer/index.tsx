"use client";

import { handleClickScroll } from "@/utils/functions";
import Link from "next/link";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaInstagram, FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="footer p-10 text-neutral-content">
        <aside>
          <img src="/assets/images/Farmwise logo.png" className="w-20" />
          <p className="text-lg">
            We simplify agriculture to <br /> open it up to everyone.
          </p>
        </aside>
        <nav className="grid grid-cols-1">
          <h6 className="footer-title">Explore</h6>
          <div className="grid grid-cols-1 gap-4 text-xl">
            <Link href={"/faq"}>FAQ</Link>
            <Link href={"/"}>Blog</Link>
            <Link href={"/owners"}>Land Owners</Link>
            <Link href={"/officers"}>Farm Officers</Link>
            <Link href={"/careers"}>Careers</Link>
            <Link href={"/officers"}>Community</Link>
          </div>
        </nav>
        <nav className="grid grid-cols-1">
          <h6 className="footer-title">Legal</h6>
          <div className="grid grid-cols-1 gap-4 text-xl">
            <Link href={"/datapolicy"}>Data Protection Policy</Link>
            <Link href={"/customerservice"}>Customer Service Policy</Link>
            <Link href={"/enviromentalpolicy"}>
              Environmental Sustainability Policy
            </Link>
            <Link href={"/partnershipconduct"}>
              Partnership Code of Conduct
            </Link>
          </div>
        </nav>
      </div>
      <div className="footer items-center p-4 bg-[#15191e] text-neutral-content">
        <aside className="items-center grid-flow-col gap-x-5">
          <FaArrowAltCircleUp
            className="cursor-pointer w-5 h-5"
            onClick={() => handleClickScroll("nav")}
          />
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://www.instagram.com/farmwisetz/?hl=en" target="_blank">
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="https://twitter.com/Farmwisetz" target="_blank">
            <FaSquareXTwitter className="w-5 h-5" />
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
