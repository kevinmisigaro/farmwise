import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white ">
      <div className="footer p-10 text-neutral-content">
        <aside>
          <img src="/assets/images/Farmwise logo.png" className="w-20" />
        </aside>
        <nav className="grid grid-cols-1">
          <h6 className="footer-title">Explore</h6>
          <div className="grid grid-cols-1 gap-4">
            <Link href={"/faq"}>
              FAQ
            </Link>
          </div>
        </nav>
        <nav className="grid grid-cols-1">
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://twitter.com/Farmwisetz"
              target="_blank"
            >
              <img
                src="/assets/images/social/icons8-twitterx-50.png"
                className="w-8"
              />
            </a>
            <a
              href="https://www.instagram.com/farmwisetz/?hl=en"
              target="_blank"
            >
              <img
                src="/assets/images/social/icons8-instagram-50.png"
                className="w-8"
              />
            </a>
          </div>
        </nav>
      </div>
      <div className="footer footer-center p-4 bg-[#15191e] text-base-content">
        <aside>
          <p>Copyright © 2024 - All right reserved by Farmwise</p>
        </aside>
      </div>
    </footer>
  );
}

export default Footer;
