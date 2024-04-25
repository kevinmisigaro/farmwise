import { FaInstagram, FaSquareXTwitter } from "react-icons/fa6";

function TopBar() {
  return (
    <div className="py-2 text-white bg-[#173d25] px-5 md:px-10 gap-y-6 md:gap-y-0 flex flex-col md:flex-row items-center md:justify-between w-full">
      <div className="flex flex-col md:flex-row gap-y-4 gap-x-8">
        <div className="flex flex-row gap-x-2 items-center">
          <img className="w-5" src="/assets/icons/icons8-telegram-app-50.png" />
          <p className="text-base md:text-sm">enquiry@farmwise.tz</p>
        </div>
        <div className="flex flex-row gap-x-2 items-center">
          <img className="w-5" src="/assets/icons/icons8-phone-50.png" />
          <p className="text-base md:text-sm">+255713444448</p>
        </div>
        <div className="flex flex-row gap-x-2 items-center">
          <img className="w-5" src="/assets/icons/icons8-location-50.png" />
          <p className="text-base md:text-sm">
            {" "}
            Msasani Tower, Postal code 14111, Plot number 503/1, Dar Es Salaam,
            Tanzania
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-x-4">
        <a href="https://www.instagram.com/farmwise.tz?igsh=MXFjeGhwZm14aXU4OA==" target="_blank">
          <FaInstagram className="w-8 h-8 md:w-5 md:h-5" />
        </a>
        <a href="https://twitter.com/Farmwisetz" target="_blank">
          <FaSquareXTwitter className="w-8 h-8 md:w-5 md:h-5" />
        </a>
      </div>
    </div>
  );
}

export default TopBar;
