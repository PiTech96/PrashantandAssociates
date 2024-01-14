import Logo from "../../assets/icons/logo";

import { ArrowDown2, Call, Sms } from "iconsax-react";
import { NavLink } from "react-router-dom";
import { heading1, heading2 } from "../../styles/text";
import AboutDropDown from "./aboutDropdown";
import ServicesDropdown from "./servicesDropdown";
import IndustryDropdown from "./industryDropdown";

function Navbar() {
  return (
    <div className="w-full">
      <div>
        <div className="flex justify-between px-6 items-center ">
          <Logo />
          <div>
            <div className="flex m-1">
              <Sms size="24" className="mx-1" color="#EB1C24" variant="Bold" />
              <p>prasaiprashantbabu9576@gmail.com</p>
            </div>
            <div className="flex m-1">
              <Call size="24" className="mx-1" color="#EB1C24" variant="Bold" />
              <p>9824934036</p>
            </div>
          </div>
        </div>
      </div>
      <ul className=" flex justify-center items-center border p-2">
        <div className="flex gap-[50px]">
          <NavLink to="/">
            <li className={`db:${heading2}`}>HOME</li>
          </NavLink>
          <AboutDropDown />
         <ServicesDropdown/>
         <IndustryDropdown/>
          <NavLink to="/portfolio">
            <li className={`${heading2}`}>PORTFOLIO</li>
          </NavLink>
          <NavLink to="/contact">
            <li className={`${heading2}`}>CONTACT</li>
          </NavLink>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;