"use client"

export default function S1(){
    return(
        <section className="w-[100%] h-[70vh] flex flex-wrap p-4">
            <Ar1/>
            <Ar2/>
        </section>
    )
}

function Ar1(){
    return(
        <article className="w-[100%] h-[40%] lg:h-[17%] py-2 rounded-xl border-b-[.3px] border-[rgba(147,146,146,0.34)] flex flex-wrap lg:justify-between justify-center lg:items-center content-center">
            <div className="w-[100%] lg:w-[40%] h-[30%] lg:h-[100%] flex items-center">
                <p className="text-[1.5rem] ms-5">Audience Overview</p>
            </div>
            <div className="w-[100%] lg:w-[60%] h-[70%] lg:h-[100%] flex flex-wrap justify-end gap-5 lg:items-center content-center px-5">
                <label htmlFor="i1" title="From Date" className="w-[100%] lg:w-[250px] h-[50px] flex justify-between items-center">
                From Date
                    <input id="i1" type="date" placeholder="mm/dd/yyyy" className="w-[70%] lg:w-[150px] h-[35px] px-1 rounded-md bg-[rgba(0,0,0,.3)] border-[.05px] border-[rgba(147,146,146,0.34)]"/>
                </label>
                <label htmlFor="i2" title="To Date" className="w-[100%] lg:w-[250px] h-[50px] flex justify-between items-center">
                To Date
                    <input id="i2" type="date" placeholder="mm/dd/yyyy" className="w-[70%] lg:w-[150px] h-[35px] px-1 rounded-md bg-[rgba(0,0,0,.3)] border-[.05px] border-[rgba(147,146,146,0.34)]"/>
                </label>
            </div>
        </article>
    )
}
  





function Ar2(){
    return(
        <article className="w-[100%] h-[50%] lg:h-[83%]">
            <SimpleLineChart/>
        </article>
    )
}


import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Defs,
  LinearGradient,
  Stop,
  filter,
  DropShadowFilter,
} from "recharts";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 8800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page H", uv: 4490, pv: 5300, amt: 2100 },
  { name: "Page L", uv: 3490, pv: 3300, amt: 2100 },
  { name: "Page M", uv: 3490, pv: 7300, amt: 2100 },
];

const SimpleLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>






        <XAxis dataKey="name" />

        <YAxis />


        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(0,0,0,.5)",
            fontWeight: "bold",
            width: "4rem",
            height: "4rem",
            fontSize: ".8rem",
          }}
        />


        <Line
          type="monotone"
          dataKey="pv"
          stroke="white"
          strokeWidth={5}
          dot={false}
          filter="url(#drop-shadow)" 
        />
      </LineChart>
    </ResponsiveContainer>
  );
};


