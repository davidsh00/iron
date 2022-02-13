import SectionBox from "../shared/SectionBox";
import { Bar } from "react-chartjs-2";
import {FaStar} from 'react-icons/fa';
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
  options: {
    legend: { display: false },
    tooltips: {
      callbacks: {
        label: function (tooltipItem) {
          return tooltipItem.yLabel;
        },
      },
    },
  },
  labels: ["customers"],
  datasets: [
    {
      label: "",
      backgroundColor: "#ffbc4e",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [30],
    },
    {
      label: "",
      backgroundColor: "#ffda93",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [92],
    },
    {
      label: "",
      backgroundColor: "#ff7576",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [80],
    },
  ],
};
function Peak() {
  return (
    <SectionBox>
      <h2 className="capitalize">On top of the peak</h2>
      <p className="text-gray-400 text-sm">We are proud of our strengths</p>
      <Bar data={state} />
      <Card number={1} title="customer indicator"/>
      <Card />
    </SectionBox>
  );
}
const Card = ({number="",rate=100.00,title="no Title"}) => {
  return (
    <div className="peak-card mb-3">
      <div className="flex items-center">
        <span className="w-5 h-5 rounded-full mr-3 inline-flex items-center justify-center bg-gray-200">
          {number}
        </span>
        <span>{title}</span>
      </div>
      <div className="flex pl-8 gap-1 items-center">
        <span>{rate}</span>
        <span className="text-yellow-500"><FaStar/></span>
      </div>
    </div>
  );
};

export default Peak;
