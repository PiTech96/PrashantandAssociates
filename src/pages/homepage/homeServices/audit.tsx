import { Link } from "react-router-dom";
import { heading1 } from "../../../styles/text";
import CustomButton from "../../../components/button/button";

function Audit() {
  return (
    <div className="w-full flex justify-center" >
    <div className="w-[75%]">
      <h1 className={`${heading1} m-2`}>Audit and Insurance</h1>
      <p className="opacity-[80%] m-2 mb-4" >
        With increasing business complexities, our clients need to ensure that
        the financial statements provide a true and fair view of their
        performance. With increasing business complexities, our clients need
        to ensure that the financial statements provide a true and fair view
        of their performance
      </p>
      <CustomButton>
        <Link className="m-2" to={"/audit-insurance"}>Learn More</Link>
      </CustomButton>
    </div>
  </div>
  );
}

export default Audit;
