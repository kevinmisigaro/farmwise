import { inter, mali } from "@/utils/fonts";

function Navbar() {
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
              <a>Home</a>
            </li>

            <li>
              <a>About</a>
            </li>

            <li>
              <a>Services</a>
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
            <a className={`${mali.className}`}>Home</a>
          </li>

          <li>
            <a className={`${mali.className}`}>About</a>
          </li>

          <li>
            <a className={`${mali.className}`}>Services</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Reach Out</a>
      </div>
    </div>
  );
}

export default Navbar;
