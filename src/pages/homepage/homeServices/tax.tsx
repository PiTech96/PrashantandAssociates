import CustomButton from "../../../components/button/button";
import { heading1 } from "../../../styles/text";

import { Link } from "react-router-dom";

function Tax() {
  return (
    <div className="w-full flex justify-center" >
      <div className="w-[75%]">
        <h1 className={`${heading1} m-2`}>Tax and Requlatory</h1>
        <p className="opacity-[80%] m-2 mb-4" >
          With increasing business complexities, our clients need to ensure that
          the financial statements provide a true and fair view of their
          performance. With increasing business complexities, our clients need
          to ensure that the financial statements provide a true and fair view
          of their performance
        </p>
        <CustomButton>
          <Link className="m-2" to={"/tax-regulatory"}>Learn More</Link>
        </CustomButton>
      </div>
    </div>
  );
}

export default Tax;