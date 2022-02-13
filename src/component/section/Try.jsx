import React from "react";
import SectionBox from "../shared/SectionBox";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
} from "chart.js";


Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
);
const state = {
  labels: ["January", "February", "March", "April", "May","june","july","August","September","november","October"],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56,70,10,35,42,71,62,0],
    },
  ],
};

function Try() {
  return (
    <SectionBox>
      <div className="text-center">
        <h2>Try For Progress your Team</h2>
        <p className="inline bg-green-100 text-green-700">
          you are contributor in your Team, progress 12%
        </p>
      </div>
      <div className="opacity-60 mt-4">
      <Bar data={state} 
      />
      </div>
      
      
    </SectionBox>
  );
}

export default Try;
