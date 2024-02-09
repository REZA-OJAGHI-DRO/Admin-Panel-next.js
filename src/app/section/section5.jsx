"use client";
import "../globals.css";
import { useEffect, useRef, useState } from "react";

export default function S5() {
  return (
    <section className="w-[100%] h-[1100px] xl:h-[550px] p-4 gap-4 flex flex-wrap justify-center xl:justify-between items-center">
      <Ar1 />
      <Ar2 />
    </section>
  );
}

function Ar1() {
  const x = useRef();
  function para1(e) {
    if (e.target.getAttribute("data-status") == "off") {
      x.current.style.display = "flex";
      e.target.setAttribute("data-status", "on");
    } else {
      x.current.style.display = "none";
      e.target.setAttribute("data-status", "off");
    }
  }
  return (
    <article className="w-[100%] xl:w-[48%] h-[48%] xl:h-[100%] overflow-hidden bg-[rgba(0,0,0,0.45)] p-4 rounded-xl">
      <div className="w-[100%] h-[8%] flex border-b-[.05px] border-[rgba(147,146,146,0.34)]">
        <div className="w-[50%] h-[100%] flex items-center">
          <p className="w-[100%] text-[1.4rem] font-bold">New Customers</p>
        </div>
        <div className="w-[50%] h-[100%] text-[1.8rem] relative flex justify-end items-center">
          <i
            data-status="off"
            onClick={() => para1(event)}
            className="cursor-pointer bi bi-three-dots"
          ></i>
          <ul
            ref={x}
            className="bg-black w-[180px] p-2 px-3 text-zinc-300 absolute top-[70%] hidden flex-wrap text-[1rem] rounded-xl "
          >
            <li className="w-[100%] h-[30px]">action</li>
            <li className="w-[100%] h-[30px]">another</li>
            <li className="w-[100%] h-[30px] py-3 my-3 border-t border-zinc-400">
              something else here
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[100%] h-[100%] overflow-hidden">
        <div className="w-[calc(100%+17px)] h-[92%] overflow-y-scroll">
          <Ul />
        </div>
      </div>
    </article>
  );
}

import Image from "next/image";

function Ul() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const x = await fetch("https://65c1ee91f7e6ea59682a15d9.mockapi.io/admin");
      const y = await x.json();
      setData(y);
    }
    getData();
  }, []);
  const data1 = data.slice(0, 12);
  return (
    <ul>
      {data1 &&
        data1.map((val) => {
          return (
            <li className="hover:bg-[rgba(255,255,255,.15)] w-[100%] h-[10vh] flex justify-between border-b-[.05px] border-[rgba(147,146,146,0.34)]">
              <div className="w-[60%] h-[100%] flex px-1 items-center justify-start">
                <Image
                  src={val.img}
                  alt="Picture of the author"
                  width={35}
                  height={35}
                  style={{
                    width: "3rem",
                    height: "3rem",
                    objectFit: "cover",
                    borderRadius: "50%",
                    marginRight: "5px",
                  }}
                />
                <div className="flex flex-wrap content-center px-2">
                  <p className="w-[100%] text-[1rem]">{val.price}</p>
                  <p className="w-[100%] text-[1rem] text-zinc-400">
                    {val.status}
                  </p>
                </div>
              </div>
              <div className="w-[40%] h-[100%] text-[1rem] flex gap-1 items-center justify-end">
                <i className="w-[2.5rem] h-[2.5rem] cursor-pointer bg-[rgba(255,255,255,.15)] rounded-full flex justify-center items-center bi bi-envelope-fill"></i>
                <i className="w-[2.5rem] h-[2.5rem] cursor-pointer bg-[rgba(255,255,255,.15)] rounded-full flex justify-center items-center bi bi-mic-fill"></i>
                <i className="w-[2.5rem] h-[2.5rem] cursor-pointer bg-[rgba(255,255,255,.15)] rounded-full flex justify-center items-center bi bi-three-dots-vertical"></i>
              </div>
            </li>
          );
        })}
    </ul>
  );
}

function Ar2() {
  const x = useRef();
  function para1(e) {
    if (e.target.getAttribute("data-status") == "off") {
      x.current.style.display = "flex";
      e.target.setAttribute("data-status", "on");
    } else {
      x.current.style.display = "none";
      e.target.setAttribute("data-status", "off");
    }
  }
  return (
    <article className="w-[100%] xl:w-[48%] h-[48%] xl:h-[100%] bg-[rgba(0,0,0,0.45)] p-4 rounded-xl">
      <div className="w-[100%] h-[8%] flex border-b-[.05px] border-[rgba(147,146,146,0.34)]">
        <div className="w-[50%] h-[100%] flex items-center">
          <p className="w-[100%] text-[1.4rem] font-bold">Orders Summary</p>
        </div>
        <div className="w-[50%] h-[100%] text-[1.8rem] relative flex justify-end items-center">
          <i
            data-status="off"
            onClick={() => para1(event)}
            className="cursor-pointer bi bi-three-dots"
          ></i>
          <ul
            ref={x}
            className="bg-black w-[180px] p-2 px-3 text-zinc-300 absolute top-[70%] hidden flex-wrap text-[1rem] rounded-xl "
          >
            <li className="w-[100%] h-[30px]">action</li>
            <li className="w-[100%] h-[30px]">another</li>
            <li className="w-[100%] h-[30px] py-3 my-3 border-t border-zinc-400">
              something else here
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[100%] h-[92%]">
        <div className="w-[100%] h-[50%] flex justify-between">
          <div className="w-[33%] h-[100%] flex justify-center items-center">
            <PieChartExample />
          </div>
          <div className="w-[33%] h-[100%] flex justify-center items-center">
            <PieChartExample1/>
          </div>
          <div className="w-[33%] h-[100%] flex justify-center items-center">
            <PieChartExample2 />
          </div>
        </div>
        <div className="w-[100%] h-[50%] ">
          <SimpleBarChart />
        </div>
      </div>
    </article>
  );
}

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const SimpleBarChart = () => {
  const data = [
    { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
    { name: "May", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        barGap={5}
        barSize={20}
      >
        <XAxis dataKey="name" />
 
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip
          itemStyle={{
            color: "rgb(0,0,0)",
            width: "5rem",
            height: "1rem",
            margin: 0,
            padding: 0,
          }}
        />

        <Bar dataKey="pv" fill="rgb(255,255,255)" />
 
      </BarChart>
    </ResponsiveContainer>
  );
};




import { PieChart, Pie } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 400 },
  { name: 'Group C', value: 200 },
  { name: 'Group D', value: 100 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 89 },
];

const PieChartExample = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="rgba(255,255,255,.5"
          label
        />
      </PieChart>
    </ResponsiveContainer>
  );
};
const data1 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];

const PieChartExample1 = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data1}
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="rgba(255,255,255,.5"
          label
        />
      </PieChart>
    </ResponsiveContainer>
  );
};
const data2 = [
  { name: 'Group A', value: 100 },
  { name: 'Group B', value: 200 },
  { name: 'Group C', value: 400 },
  { name: 'Group D', value: 100 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];

const PieChartExample2 = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data2}
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="rgba(255,255,255,.5"
          label
        />
      </PieChart>
    </ResponsiveContainer>
  );
};















// const ApexChart2 = () => {
//   const [chartState, setChartState] = useState({
//     series: [60],
//     options: {
//       chart: {
//         height: 350,
//         type: "radialBar",
//       },
//       plotOptions: {
//         radialBar: {
//           hollow: {
//             size: "70%",
//           },
//         },
//       },
//       fill: {
//         colors: ["rgb(255,255,255)"],
//         background: ["rgba(255,255,255,.5)"],
//         opacity: 0.2, 
//         gradient: {
//           shade: "light", 
//           shadeIntensity: 0.5, 
//           type: "horizontal",
//           stops: [0, 50, 65, 91], 
//         },
//       },
//       labels: ["Completed"],
//     },
//   });

//   return (
//     <div>
//       <div id="chart">
//         <ReactApexChart
//           options={chartState.options}
//           series={chartState.series}
//           type="radialBar"
//           height={180}
//         />
//       </div>
//       <div id="html-dist"></div>
//     </div>
//   );
// };
// const ApexChart3 = () => {
//   const [chartState, setChartState] = useState({
//     series: [45],
//     options: {
//       chart: {
//         height: 350,
//         type: "radialBar",
//       },
//       plotOptions: {
//         radialBar: {
//           hollow: {
//             size: "70%",
//           },
//         },
//       },
//       fill: {
//         colors: ["rgb(255,255,255)"],
//         background: ["rgba(255,255,255,.5)"],
//         opacity: 0.2, 
//         gradient: {
//           shade: "light", 
//           shadeIntensity: 0.5, 
//           type: "horizontal", 
//           stops: [0, 50, 65, 91], 
//         },
//       },
//       labels: ["Completed"],
//       style: {
//         colors: ["rgb(255,255,255)"],
//       },
//     },
//   });

//   return (
//     <div>
//       <div id="chart" className="text-[white]">
//         <ReactApexChart
//           options={chartState.options}
//           series={chartState.series}
//           type="radialBar"
//           height={180}
//         />
//       </div>
//       <div id="html-dist"></div>
//     </div>
//   );
// };
