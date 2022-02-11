import React from "react";
import { FaAngleDown } from "react-icons/fa";
import Profile from "../shared/Profile";
import SectionBox from "../shared/SectionBox";

function Indicator() {
  return (
    <SectionBox>
      <div>
        <h2>Evaluation criteria </h2>
        <IndicatorTable />
      </div>
    </SectionBox>
  );
}
const IndicatorTable = () => {
  return (
    <div className="table w-full">
      <div
        className={`table-header flex w-full border-b text-center p-2 text-sm bg-gray-100`}
      >
        <div className={`w-[24%] text-left`}>observation</div>
        <div className="w-[15%] ">performance</div>
        <div className="w-[15%] ">target</div>
        <div className="w-[15%] ">score</div>
        <div className="w-[15%] ">scored</div>
        <div className="w-[15%] ">final scored</div>
        <div className="w-[1%]">
        </div>
      </div>
      <TitleTable title={"clients"} finalScore={67} >
        <SubTable name={"success client"} />
        <SubTable name={"failer client"} />
      </TitleTable>
      <TitleTable >
        <SubTable />
        <SubTable/>
      </TitleTable>
    </div>
  );
};
const TitleTable = ({ title="title", children,finalScore=0 }) => {
  let open = 0;
  const handleShow = (e) => {
    open = !open;
    const parent = e.currentTarget.parentElement.parentElement;

    const elem = parent.children[1];
      parent.classList.toggle('active')
    if (open) {
      elem.style.height = "auto";
      parent.style.borderLeft = `4px solid rgb(${Math.random() * 255},${
        Math.random() * 255
      },${Math.random() * 255})`;
    } else {
      elem.style.height = "0";
      parent.style.borderLeft = "0px solid transparent";
    }
    console.log();
  };
  return (
    <ul
      className={`table-item w-full  border-b mb-2 group transition-all overflow-hidden duration-500`}
    >
      <div
        className={`title-table flex w-full  text-center p-2 text-sm `}
      >
        <div className={`w-[24%] text-left`}>{title}</div>
        <div className="w-[15%] "></div>
        <div className="w-[15%] "></div>
        <div className="w-[15%] "></div>
        <div className="w-[15%] "></div>
        <div className="w-[15%] ">{finalScore}</div>
        <div onClick={handleShow} className="w-[1%] cursor-pointer">
          <FaAngleDown />
        </div>
      </div>
      <div className="subtitle-table h-0">{children}</div>
    </ul>
  );
};
const SubTable = ({
  name = "item",
  performane = 0,
  target = 0,
  score = 0,
  scored = 0,
}) => {
  return (
    <div className="flex w-full text-center p-2 text-sm  ">
      <div className="w-[24%] pl-8 text-left">{name}</div>
      <div className="w-[15%]">{performane}</div>
      <div className="w-[15%]">{target}</div>
      <div className="w-[15%]">{score}</div>
      <div className="w-[15%]">{scored}</div>
    </div>
  );
};
export default Indicator;
