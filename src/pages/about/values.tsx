import img from "../../assets/image/1.jpg";
// import { EyeOutlined } from "@ant-design/icons";
import { paragraph } from "../../styles/text";
import vision from "../../assets/image/vision1.jpg"
import mission from "../../assets/image/mission1.jpg"

function Values() {
  return (
    <div className="w-full relative">
      <div className="bg-blue relative h-[400px]">
        <div className="absolute top-[40%] left-[32%] transform translate(-50%, -50%) text-center text-white flex flex-col items-center justify-center">
          <h1 className="text-[32px] font-medium">About</h1>
          <hr className="w-[15rem]"></hr>
          <h2 className="text-[42px] font-bold">Our Mission and Values</h2>
        </div>
        <img
          src={img}
          className="w-full h-full object-cover opacity-[20%]"
          alt="hello"
        />
      </div>
      <div className="w-full  flex flex-col  items-center gap-6">
        <div className="w-[70%] flex flex-col gap-12 my-6">
          <div className="flex items-center gap-8">
            <div className="w-1/2">
              <h1 className="text-[24px] font-semibold">Our Vision</h1>
              <p className={`${paragraph}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
                augue eget libero lacinia efficitur. In hac habitasse platea
                dictumst. Vivamus id felis et elit imperdiet ultricies. Proin
                non libero nec sapien venenatis consectetur. Suspendisse
                potenti. Vestibulum bibendum aliquet magna, sit amet venenatis
                nulla tincidunt in. Sed vel euismod arcu. Ut nec sapien ac
                libero consectetur. Suspendisse potenti. Vestibulum bibendum
                aliquet magna, sit amet venenatis nulla tincidunt in. Sed vel
                euismod arcu. Ut nec sapien ac libero.
              </p>
              <div className="flex gap-8 my-4">
                <h1>vision no 1</h1>
                <h1>vision no 2</h1>
                <h1>vision no 3</h1>
              </div>
            </div>
            <img src={vision} className="border w-1/2" alt="" />
          </div>
          <div className="flex items-center gap-8">
            <img src={mission} className="w-1/2 border" alt="" />
            <div className="w-1/2">
              <h1 className="text-[24px] font-semibold">Our Missions</h1>

              <p className={`${paragraph}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
                augue eget libero lacinia efficitur. In hac habitasse platea
                dictumst. Vivamus id felis et elit imperdiet ultricies. Proin
                non libero nec sapien venenatis consectetur. Suspendisse
                potenti. Vestibulum bibendum aliquet magna, sit amet venenatis
                nulla tincidunt in. Sed vel euismod arcu. Ut nec sapien ac
                libero consectetur. Suspendisse potenti. Vestibulum bibendum
                aliquet magna, sit amet venenatis nulla tincidunt in. Sed vel
                euismod arcu. Ut nec sapien ac libero.
              </p>
              <div className="flex gap-8 my-4">
                <h1>Mission no 1</h1>
                <h1>Mission no 2</h1>
                <h1>Mission no 3</h1>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Values;
