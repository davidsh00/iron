import SectionBox from "../shared/SectionBox";
import { FaAngleRight } from "react-icons/fa";
function Improve() {
  return (
    <SectionBox>
      <div className="w-full capitalize text-center">
        <h2>Lets be Improve..</h2>
        <p className="text-sm text-gray-400">
          we help you to be best of your self
        </p>
      </div>
      <div className="mt-4 flex flex-wrap">
        <div className="w-full md:w-[50%] pr-6 ">
          <div className="inline-flex flex-col gap-4 ">
          <Dist>
            <h2 className="font-bold capitalize">
              the follow tips can improve your performane:
            </h2>
          </Dist>
          <Card btnText={"Read Article"}>
            <Dist>
              <h3>
                Whats the Inner Process And How its Can be Effect on staff?
              </h3>
              <p className="text-gray-400">we try to define very simple the inner process</p>
            </Dist>
          </Card>
          <Card btnText={"Lets Go"}>
            <Dist>
              <h3>
                Whats Your Problems?
              </h3>
              <p className="text-gray-400">we try to define very simple the inner processwe try to define very simple the inner process</p>
            </Dist>
          </Card>
          </div>
        </div>
        <div className="w-full  md:w-[50%] flex justify-center items-center h-[350px] ">
          <div className="relative">
            <Circle
              y={-10}
              size={200}
              title={"clients"}
              className={"bg-purple-600"}
            />
            <Circle
              title={
                <>
                  <div>inner process</div>
                  <div>12%</div>
                </>
              }
              y={40}
              x={-100}
              size={150}
              className={"bg-blue-600"}
            />
            <Circle
              title={
                <>
                  <div>outer process</div>
                  <div>18%</div>
                </>
              }
              y={100}
              x={0}
              size={150}
              className={"bg-orange-600"}
            />
            <Circle
              title={
                <>
                  <div>Financial</div>
                  <div>5%</div>
                </>
              }
              y={60}
             
              size={100}
              className={"bg-green-600 translate-x-[50px!important] lg:translate-x-[85px!important]"}
            />
          </div>
        </div>
      </div>
    </SectionBox>
  );
}
const Circle = ({ title = "Title", size = 100, x = 0, y = 0, className }) => {
  return (
    <div
      className={`transition-all duration-500 capitalize  flex flex-col bg-opacity-70 items-center translate-x-[-50%]  translate-y-[-50%] justify-center text-white rounded-full   absolute ${className}`}
      style={{ width: size + "px", top: y, left: x, height: size + "px" }}
    >
      {title}
    </div>
  );
};
const Dist = (props) => {
  return (
    <div className="flex items-baseline gap-2">
      <div
        className={`w-[16px] h-[16px] shrink-0 rounded-full `}
        style={{
          backgroundColor:
            "rgb(" +
            Math.random() * 255 +
            "," +
            Math.random() * 255 +
            "," +
            Math.random() * 255 +
            ")",
        }}
      ></div>
      <div>{props.children}</div>
    </div>
  );
};
const Card = (props) => {
  return (
    <div className=" card flex flex-col gap-4 border rounded-md p-4">
      <div>{props.children}</div>
      <div>
        <span className="inline-flex  bg-red-300 hover:text-white items-center  cursor-pointer gap-2bg-red-500 hover:bg-red-600 text-red-800 rounded-md px-2 py-1">
          <a href="#">{props.btnText}</a> <FaAngleRight />
        </span>
      </div>
    </div>
  );
};
export default Improve;
