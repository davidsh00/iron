import React from "react";
import Profile from "../shared/Profile";
import SectionBox from "../shared/SectionBox";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function UserProgress() {
  return (
    <SectionBox>
      <div className=" sm:text-base">
        <div className="flex flex-col justify-between sm:flex-row items-center gap-4 ">
          <div className="user-card flex flex-col justify-center gap-3 items-center sm:flex-row sm:justify-start">
            <div className="w-[80%] sm:w-[70px] md:w-[90px]">
              <Profile />
            </div>

            <div className="sm:text-left text-center">
              <h4>Dear Mrs Amini</h4>
              <p className="text-gray-500">we belive your ability</p>
            </div>
          </div>
          <div className="user-progress flex w-full sm:w-auto justify-between">
            <div className="sm:hidden">
              <h4 className="font-bold">status:</h4>
              <p className="mx-4  bg-green-300 text-green-600 ">Greate, you have progress for 12%</p>
            </div>
            <div className=" w-[100px]">
              <CircularProgressbar strokeWidth={15} value={67} text={98.2} />
            </div>
          </div>
        </div>
        <p className="hidden sm:inline-block   bg-green-300 text-green-600 ">
          Greate, you have progress for 12%
        </p>
      </div>
    </SectionBox>
  );
}

export default UserProgress;
