import { FaInstagram, FaSquareXTwitter } from "react-icons/fa6";

function TopBar() {
  return (
    <div className="py-2 text-white bg-[#3C975E] px-5 md:px-10 flex flex-col md:flex-row items-center md:justify-between flex-start">
      <div className="flex flex-col md:flex-row gap-y-4 gap-x-8">
        <div className="flex flex-row gap-x-2 items-center">
          <img className="w-5" src="/assets/icons/icons8-telegram-app-50.png" />
          <p className="text-sm">enquiry@farmwise.tz</p>
        </div>
        <div className="flex flex-row gap-x-2 items-center">
          <img className="w-5" src="/assets/icons/icons8-phone-50.png" />
          <p className="text-sm">+255713444448</p>
        </div>
        <div className="flex flex-row gap-x-2 items-center">
          <img className="w-5" src="/assets/icons/icons8-location-50.png" />
          <p className="text-sm">
            {" "}
            Msasani Tower, Postal code 14111, Plot number 503/1, Dar Es Salaam, Tanzania
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-x-4">
      <a href="https://www.instagram.com/farmwisetz/?hl=en" target="_blank">
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="https://twitter.com/Farmwisetz" target="_blank">
            <FaSquareXTwitter className="w-5 h-5" />
          </a>
      </div>
    </div>
  );
}

export default TopBar;
