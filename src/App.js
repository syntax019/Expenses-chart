import logo from "./images/logo.svg";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Data from "./data.json";

export default function App() {
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          display: true,
        },
      },
      y: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        labels: {
          // This more specific font property overrides the global property
          font: {
            family: "sans-serif",
          },
        },
      },
    },
  };
  return (
    <div className="font-myFont w-96 mx-auto mt-20">
      <div className="balance bg-red flex items-center justify-between p-4 rounded-xl">
        <div className="text-cream">
          <p className="text-cream text-sm">My balance</p>
          <h3 className="text-2xl font-bold">$921.48</h3>
        </div>
        <img src={logo} alt="logo" />
      </div>
      <div className="chart bg-white rounded-xl my-4 p-4">
        <p className="text-2xl font-bold text-darkBrown">
          Spending - Last 7 days
        </p>
        <div className="bar-chart mt-4 mb-8">
          <Bar
            options={options}
            data={{
              labels: Data.map((data) => data.day),
              datasets: [
                {
                  label: "",
                  data: Data.map((data) => data.amount),
                  backgroundColor: [
                    "hsl(10, 79%, 65%)",
                    "hsl(10, 79%, 65%)",
                    "hsl(186, 34%, 60%)",
                    "hsl(10, 79%, 65%)",
                    "hsl(10, 79%, 65%)",
                    "hsl(10, 79%, 65%)",
                    "hsl(10, 79%, 65%)",
                  ],
                  borderRadius: 5,
                },
              ],
            }}
          />
        </div>
        <hr className="opacity-20" />
        <p className="text-xs mt-8">Total this month</p>
        <div className="flex justify-between items-center">
          <h3 className="text-3xl font-bold text-darkBrown">$478.33</h3>
          <div>
            <p className="text-xs font-bold text-darkBrown">+2.4%</p>
            <p className="text-xs">from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}
