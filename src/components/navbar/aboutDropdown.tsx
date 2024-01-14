import { useState } from "react";
import { Link } from "react-router-dom"
import { ArrowDown2} from "iconsax-react";
import { heading2 } from "../../styles/text";
;

function AboutDropDown() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div onMouseLeave={handleMouseLeave} className="relative ">
      <button
        onMouseEnter={handleMouseEnter}
        className=" text-utils hover:text-utils font-medium rounded-lg text-[1.05rem] text-center inline-flex items-center "
        type="button"
      >
        <li className={`${heading2}`}>ABOUT US</li>
        <ArrowDown2 size="24" variant="Bold" color="#0A0739" />
      </button>

      {isDropdownVisible && (
        <div className="absolute w-full p-2  z-1 rounded-lg opacity-[.80] bg-white shadow w-[18rem] ">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <Link
              to="/frim"
              className="hover:text-primary-p10 block px-4 py-2 text-utils-u1 opacity-[.80] hover:bg-primary-p50"
            >
              <li>THE FIRM</li>
            </Link>
            <Link
              to="/missions"
              className="hover:text-primary-p10 block px-4 py-2 text-utils-u1  opacity-[.80]  hover:bg-primary-p50"
            >
              <li>MISSION, VISION AND SHARED VALUES</li>
            </Link>
            <Link
              to="/team"
              className="hover:text-primary-p10 block px-4 py-2 text-utils-u1  opacity-[.80] hover:bg-primary-p50"
            >
              <li>OUR LEADERS</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}

export default AboutDropDown;